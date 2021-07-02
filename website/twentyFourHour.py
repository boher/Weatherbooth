from re import I
import requests
import json
from datetime import datetime, timedelta
import time
import pandas as pd
from numpy import array
from sklearn.preprocessing import MinMaxScaler
import datetime
import numpy as np
from tensorflow.keras.models import load_model

def startHour(dt):
    api_key = "5fbf6df2ae8f85211572ef4cb10989e5"
    lat = "1.3521"
    lon = "103.8198"
    url = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=%s&lon=%s&appid=%s&units=metric&dt=%s" % (lat, lon, api_key, dt)

    response = requests.get(url)
    data = json.loads(response.text)
    return data

def getHourly(data):
    temp = []
    hum = []
    pre = []
    air = []
    wind = []
    cloud = []

    hourly = data["hourly"]

    x = 1

    for i in hourly:
        if x <= 24:
            # temp.append(int(i["temp"]))
            hum.append(i["humidity"])
            air.append(i["pressure"])
            wind.append(i["wind_speed"])
            # cloud.append(i["clouds"])

            rain = "rain" in i
            if rain == True:
                r = i["rain"]
                pre.append(r.get('1h'))
            else:
                pre.append(0)
        x = x+1

    td = testdata()
    dataframe = dataFrame(td)
    humm = getHum(dataframe)
    humModel = load_model('website/model/humidity.h5')
    humP = humModel.predict(humm)
    humP = getList(humP)

    cloudm = getCloud(dataframe)
    cloudModel = load_model('website/model/cloud.h5')
    cloudP = cloudModel.predict(cloudm)
    cloudP = getList(cloudP)

    tempm = getTemp(dataframe)
    tempModel = load_model('website/model/temp.h5')
    tempP = tempModel.predict(tempm)
    tempP = getList(tempP)

    return tempP, hum, pre, air, wind, cloudP, humP

def getList(data):
    x = []
    for i in data[0]:
        a = i
        if(i < 1):
            a = int(i * 100)
        x.append(a)
    return x

def testdata():
    dt1 = datetime.datetime.now()- timedelta(3)
    dt1 = dt1.strftime('%m/%d/%Y 00:00:00')
    dt1 = datetime.datetime.strptime(dt1, '%m/%d/%Y %H:%M:%S')
    dt1 = int(time.mktime(dt1.timetuple()))

    dt2 = datetime.datetime.now()- timedelta(1)
    dt2 = dt2.strftime('%m/%d/%Y 23:59:00')
    dt2 = datetime.datetime.strptime(dt2, '%m/%d/%Y %H:%M:%S')
    dt2 = int(time.mktime(dt2.timetuple()))

    api_key = "94c05f2e1e1a930f1a8e3ddba65af770"
    lat = "1.3521"
    lon = "103.8198"
    url = "http://history.openweathermap.org/data/2.5/history/city?lat=%s&lon=%s&type=hour&start=%s&end=%s&appid=%s" % (lat, lon, dt1, dt2, api_key)

    response = requests.get(url)
    data = json.loads(response.text)

    return data

def ifRain(data):
    if 'rain' in data:
        r = data['rain']
        return r.get('1h')
    else:
        return 0

def dataFrame(data):
    hourly = data["list"]

    dt = []
    feel_like = []
    cloud = []
    hum = []
    pressure = []
    temp = []
    cond_is_clear = []
    cond_is_cloud = []
    cond_is_rain = []
    windspeed = []
    rain = []

    for i in hourly:
        date = i['dt']
        date = datetime.datetime.fromtimestamp(date).strftime('%Y-%m-%d %H:%M:%S')
        dt.append(date)
        feel_like.append(i['main']['feels_like'])
        cloud.append(i['clouds']['all'])
        hum.append(i['main']['humidity'])
        pressure.append(i['main']['pressure'])
        temp.append(i['main']['temp'])
        windspeed.append(i['wind']['speed'])
        for x in i["weather"]:
            if(x['main'] == 'Rain'):
                cond_is_rain.append(1.0)
                cond_is_clear.append(0.0)
                cond_is_cloud.append(0.0)
            if(x['main'] == 'Clouds'):
                cond_is_rain.append(0.0)
                cond_is_clear.append(0.0)
                cond_is_cloud.append(1.0)
            if(x['main'] == 'Clear'):
                cond_is_rain.append(0.0)
                cond_is_clear.append(1.0)
                cond_is_cloud.append(0.0)
        rain.append(ifRain(i))

    df = pd.DataFrame(list(zip(dt, feel_like, cloud, hum, pressure, temp, cond_is_cloud, cond_is_clear, cond_is_rain, windspeed, rain)),
               columns =['datetime', 'feel_like', 'cloud', 'hum', 'p', 't', 'cond_is_cloud','cond_is_clear', 'cond_is_rain', 'ws', 'rain'])

    df['t'] = [x-273.15 for x in df['t']]
    df['feel_like'] = [x-273.15 for x in df['feel_like']]

    new = df["datetime"].str.split(" ", n = 1, expand = True)
    time = new[1].str.split(":", n = 1, expand = True)
    date = new[0].str.split("-", n = 2, expand = True)

    df['hour'] = time[0]
    df['year'] = date[0]
    df['month'] = date[1]
    df['day'] = date[2]

    df['month'] = df['month'].astype(int)
    df['day'] = df['day'].astype(int)
    df['hour'] = df['hour'].astype(int)

    df['hour_cos'] = [np.cos(x * (2 * np.pi/24)) for x in df['hour']]
    df['hour_sin'] = [np.sin(x * (2 * np.pi/24)) for x in df['hour']]

    df['month_cos'] = [np.cos(x * (2 * np.pi/12)) for x in df['month']]
    df['month_sin'] = [np.sin(x * (2 * np.pi/12)) for x in df['month']]

    scaler = MinMaxScaler()
    df[['feel_like', 'cloud', 'hum', 'p', 't','cond_is_cloud','cond_is_clear', 'cond_is_rain', 'ws', 'rain']] = scaler.fit_transform(df[['feel_like', 'cloud', 'hum', 'p', 't', 'cond_is_cloud','cond_is_clear', 'cond_is_rain', 'ws', 'rain']])

    return  df

def getHum(df):
    df = df[['p', 'cloud', 'rain', 't', 'hum','hour_cos', 'hour_sin', 'month_cos', 'month_sin']]
    X = array(df[:72])
    X = X.reshape((1, 72, 9))
    
    return X

def getTemp(df):
    df = df[['feel_like','hum','rain','hour_cos','hour_sin','month_cos','month_sin']]
    print(df)
    X = array(df[:72])
    X = X.reshape((1, 72, 7))

    return X

def getCloud(df):
    df = df[['t', 'feel_like','hum','cond_is_clear','hour_cos','hour_sin','month_sin','month_cos']]
    
    X = array(df[:72])
    X = X.reshape((1, 72, 8))

    return X

    