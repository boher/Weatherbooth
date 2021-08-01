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
import pytz

class TwentyFourHourWeather:

    df_new = ''

    def getDataFrame(self):
        return df_new

    def getHourly(self):
        global df_new
        global min_pressure
        global max_pressure
        global min_ws
        global max_ws

        td = self.testdata()
        dataframe, min_pressure, max_pressure, min_ws, max_ws, df_new = self.dataFrame(td)

        tempm = self.getTemp(dataframe)
        tempModel = load_model('website/model/temp.h5')
        tempP = tempModel.predict(tempm)
        tempP = self.getList(tempP)

        humm = self.getHum(dataframe)
        humModel = load_model('website/model/humidity.h5')
        humP = humModel.predict(humm)
        humP = self.getListPercentage(humP)

        cloudm = self.getCloud(dataframe)
        cloudModel = load_model('website/model/cloud.h5')
        cloudP = cloudModel.predict(cloudm)
        cloudP = self.getListPercentage(cloudP)

        windspeed = self.getwindSpeed(dataframe)
        windModel = load_model('website/model/windspeed.h5')
        windP = windModel.predict(windspeed)
        windP = self.getList(windP)
        windP = self.scalarBack(windP, min_ws, max_ws)

        ap = self.getAir(dataframe)
        apModel = load_model('website/model/airpressure.h5')
        apP = apModel.predict(ap)
        apP = self.getList(apP)
        apP = self.scalarBack(apP, min_pressure, max_pressure)

        rain = self.getRain(dataframe)
        rainModel = load_model('website/model/precipitation.h5')
        rainP = rainModel.predict(rain)
        rainP = self.getList(rainP)

        return tempP, humP, rainP, apP, windP, cloudP

    def scalarBack(self, data, min_value, max_value):
        x = [(i * (max_value - min_value)) + min_value for i in data]        
        return x

    def getListPercentage(self, data):
        x = [int(i*100) if i<=1 else 100 for i in data[0]]
        return x

    def getList(self, data):
        x = [i for i in data[0]]
        return x

    def testdata(self):

        kl=pytz.timezone('Asia/Kuala_Lumpur')

        dt1 = datetime.datetime.now(kl)- timedelta(3)
        dt1 = dt1.strftime('%m/%d/%Y 00:00:00')
        dt1 = datetime.datetime.strptime(dt1, '%m/%d/%Y %H:%M:%S')
        dt1 = int(time.mktime(dt1.timetuple())) 

        dt2 = datetime.datetime.now(kl)- timedelta(1)
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

    def ifRain(self, data):
        if 'rain' in data:
            return data['rain']['1h']
        else:
            return 0

    def dataFrame(self, data):
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
            m = i['weather'][0]['main']
            if(m == 'Rain' or m == 'Drizzle' or m == 'Thunderstorm' or m == 'Snow'):
                cond_is_rain.append(1.0)
                cond_is_clear.append(0.0)
                cond_is_cloud.append(0.0)
            if(m == 'Clouds'):
                cond_is_rain.append(0.0)
                cond_is_clear.append(0.0)
                cond_is_cloud.append(1.0)
            if(m == 'Clear'):
                cond_is_rain.append(0.0)
                cond_is_clear.append(1.0)
                cond_is_cloud.append(0.0)    
            rain.append(self.ifRain(i))  

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

        df_new = df.copy()

        min_pressure = df['p'].min()
        max_pressure = df['p'].max()

        min_ws = df['ws'].min()
        max_ws = df['ws'].max()

        scaler = MinMaxScaler()
        df[['feel_like', 'cloud', 'hum', 'p', 't','cond_is_cloud','cond_is_clear', 'cond_is_rain', 'ws', 'rain']] = scaler.fit_transform(df[['feel_like', 'cloud', 'hum', 'p', 't', 'cond_is_cloud','cond_is_clear', 'cond_is_rain', 'ws', 'rain']])

        return  df, min_pressure, max_pressure, min_ws, max_ws, df_new

    def getHum(self, df):
        df = df[['p', 'cloud', 'rain', 'hour_cos', 'hour_sin', 'month_cos', 'month_sin']]
        X = array(df[:72])
        X = X.reshape((1, 72, 7))

        return X

    def getTemp(self, df):
        df = df[['cloud','hum','rain','hour_cos','hour_sin','month_cos','month_sin']]
        X = array(df[:72])
        X = X.reshape((1, 72, 7))

        return X

    def getCloud(self, df):
        df = df[['t','hum','cond_is_clear','rain','hour_cos','hour_sin','month_sin','month_cos']]
        X = array(df[:72])
        X = X.reshape((1, 72, 8))

        return X

    def getwindSpeed(self, df):
        df = df[['p', 'cloud', 'rain', 't', 'hum','hour_cos', 'hour_sin', 'month_cos', 'month_sin']]
        X = array(df[:72])
        X = X.reshape((1, 72, 9))

        return X

    def getAir(self, df):
        df = df[['t', 'hum', 'hour_cos', 'hour_sin', 'month_cos', 'month_sin']]
        X = array(df[:72])
        X = X.reshape((1, 72, 6))

        return X

    def getRain(self, df):
        df = df[['hum', 'cloud', 'p', 'hour_cos', 'hour_sin', 'month_cos', 'month_sin']]
        X = array(df[:72])
        X = X.reshape((1, 72, 7))

        return X

    def __init__(self) -> None:
    
        t, h, pe, a, w, c = self.getHourly()

        self.t = t
        self.h = h
        self.pe = pe
        self.a = a
        self.w = w
        self.c = c