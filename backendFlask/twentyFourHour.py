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

class TwentyFourHourWeather:

    df_new = ''

    def __init__(self) -> None:
    
        tfHourDict, t, h, pe, a, w, c = self.getHourly()

        self.tfHourDict = tfHourDict
        self.t = t
        self.h = h
        self.pe = pe
        self.a = a
        self.w = w
        self.c = c

    def getDataFrame(self):
        return df_new

    def getHourly(self):
        global df_new
        global min_pressure
        global max_pressure
        global min_ws
        global max_ws
        hourly_details = ["12am", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", 
                  "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"]

        td = self.testdata()
        dataframe, min_pressure, max_pressure, min_ws, max_ws, df_new = self.dataFrame(td)

        humm = self.getHum(dataframe)
        humModel = load_model('backendFlask/model/humidity.h5')
        humP = humModel.predict(humm)
        humP = self.getListPercentage(humP)
        hum = list(map(lambda x: float(str(x).replace(",", "")), humP)) # Cast numpy.float32 to String, then map to primitive float

        cloudm = self.getCloud(dataframe)
        cloudModel = load_model('backendFlask/model/cloud.h5')
        cloudP = cloudModel.predict(cloudm)
        cloudP = self.getListPercentage(cloudP)
        cloud = list(map(lambda x: float(str(x).replace(",", "")), cloudP)) # Cast numpy.float32 to String, then map to primitive float

        tempm = self.getTemp(dataframe)
        tempModel = load_model('backendFlask/model/temp.h5')
        tempP = tempModel.predict(tempm)
        tempP = self.getList(tempP)
        temp = list(map(lambda x: float(str(x).replace(",", "")), tempP)) # Cast numpy.float32 to String, then map to primitive float

        windspeed = self.getwindSpeed(dataframe)
        windModel = load_model('backendFlask/model/windspeed.h5')
        windP = windModel.predict(windspeed)
        windP = self.getList(windP)
        windP = self.scalarBack(windP, min_ws, max_ws)
        wind = list(map(lambda x: float(str(x).replace(",", "")), windP)) # Cast numpy.float32 to String, then map to primitive float

        ap = self.getAir(dataframe)
        apModel = load_model('backendFlask/model/airpressure.h5')
        apP = apModel.predict(ap)
        apP = self.getList(apP)
        apP = self.scalarBack(apP, min_pressure, max_pressure)
        ap = list(map(lambda x: float(str(x).replace(",", "")), apP)) # Cast numpy.float32 to String, then map to primitive float

        rain = self.getRain(dataframe)
        rainModel = load_model('backendFlask/model/precipitation.h5')
        rainP = rainModel.predict(rain)
        rainP = self.getList(rainP)
        rain = list(map(lambda x: float(str(x).replace(",", "")), rainP)) # Cast numpy.float32 to String, then map to primitive float

        attributes = [temp, hum, rain, ap, wind, cloud]
        attribute_list = ['t', 'h', 'pe', 'a', 'w', 'c']
        tfHourDict = dict()
        for i in range(len(attribute_list)):
            tfHourDict[attribute_list[i]] = {}
            for hr, attr in zip(hourly_details, attributes[i]):
                tfHourDict[attribute_list[i]][hr] = attr

        return tfHourDict, temp, hum, rain, ap, wind, cloud

    def scalarBack(self, data, min_value, max_value):
        x = []

        for i in data:
            new = (i * (max_value - min_value)) + min_value
            x.append(new)
        
        return x

    def getListPercentage(self, data):
        x = []
        for i in data[0]:
            a = i
            if(i < 1):
                a = int(i * 100)
            x.append(a)
        return x

    def getList(self, data):
        x = []
        for i in data[0]:
            x.append(i)
        return x

    def testdata(self):
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

    def ifRain(self, data):
        if 'rain' in data:
            r = data['rain']
            return r.get('1h')
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