from re import A
from datetime import datetime, timedelta
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
import numpy as np
from tensorflow.keras.models import load_model
from numpy import array
from joblib import load

class SevenDayWeather:

    def get7Day(self, dataframe, tfhour):
        temp = tfhour.t
        humd = tfhour.h
        rain = tfhour.pe
        pressure = tfhour.a
        ws = tfhour.w
        cloud = tfhour.c
        c = []
        clear = []
        rn = []

        month_sin, month_cos, hour_sin, hour_cos = self.getMonthNHour(dataframe)

        c, clear, rn = self.getCondFirst(cloud, rain, temp, humd, pressure, ws, hour_sin, hour_cos, month_sin, month_cos)

        df_new = dataframe[['year', 'month', 'day', 'hour', 'cloud', 'hum', 'cond_is_cloud','cond_is_clear', 'cond_is_rain', 'p', 't', 'ws', 'rain']]
        firstDay, temp, humd, rain, pressure, ws, cloud, df_new, c, clear, rn = self.getPerDay(df_new, temp, humd, rain, pressure, ws, cloud, c, clear, rn)
        secondDay, temp, humd, rain, pressure, ws, cloud, df_new, c, clear, rn = self.getPerDay(df_new, temp, humd, rain, pressure, ws, cloud, c, clear, rn)
        thirdDay, temp, humd, rain, pressure, ws, cloud, df_new, c, clear, rn = self.getPerDay(df_new, temp, humd, rain, pressure, ws, cloud, c, clear, rn)
        fourthDay, temp, humd, rain, pressure, ws, cloud, df_new, c, clear, rn = self.getPerDay(df_new, temp, humd, rain, pressure, ws, cloud, c, clear, rn)
        fifthDay, temp, humd, rain, pressure, ws, cloud, df_new, c, clear, rn = self.getPerDay(df_new, temp, humd, rain, pressure, ws, cloud, c, clear, rn)
        sixthDay, temp, humd, rain, pressure, ws, cloud, df_new, c, clear, rn = self.getPerDay(df_new, temp, humd, rain, pressure, ws, cloud, c, clear, rn)
        seventhDay, temp, humd, rain, pressure, ws, cloud, df_new, c, clear, rn = self.getPerDay(df_new, temp, humd, rain, pressure, ws, cloud, c, clear, rn)
        
        return firstDay, secondDay, thirdDay, fourthDay, fifthDay, sixthDay, seventhDay

    def getPerDay(self, df_new, temp, humd, rain, pressure, ws, cloud, c, clear, rn):
        years = []
        months = []
        days = []
        hour = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]

        years, months, days, daydate, dates = self.getDate(df_new, years, months, days)
        df_new = self.concatDF(df_new, years, months, days, hour, cloud, humd, c, clear, rn, pressure, temp, ws, rain)
        min_pressure = df_new['p'].min()
        max_pressure = df_new['p'].max()

        df = df_new.copy()

        min_ws = df_new['ws'].min()
        max_ws = df_new['ws'].max()
        df_new = self.getScalar(df_new)

        temp = self.getTemp(df_new)
        humd = self.getHum(df_new)
        rain = self.getRain(df_new)
        pressure = self.getAir(df_new, min_pressure, max_pressure)
        ws = self.getwindSpeed(df_new, min_ws, max_ws)
        cloud = self.getCloud(df_new)
        conditionList, c, clear, rn = self.getCond(df_new.loc[df.index[48:],['t','ws','hum','p','cloud','rain','hour_cos','hour_sin','month_sin','month_cos']])

        condition_overall = self.most_frequent(conditionList)
        condition_img = self.getImg(condition_overall)
        min_temp, max_temp = self.getMinMaxTemp(temp)
        mornR, afterR, nightR, midR = self.daySection(rain, 1)
        mornH, afterH, nightH, midH = self.daySection(humd, 1)
        mornT, afterT, nightT, midT = self.daySection(temp, 1)
        morn_cloud, after_cloud, night_cloud, mid_cloud = self.daySection(cloud, 1)
        morn_img, after_img, night_img, mid_img = self.daySection(conditionList, 0)

        day = [daydate, dates, condition_overall, condition_img, min_temp, max_temp, mid_img, int(midT), int(mid_cloud),midR,int(midH),
                                                                                                morn_img, int(mornT), int(morn_cloud),mornR,int(mornH),
                                                                                                after_img, int(afterT), int(after_cloud),afterR,int(afterH),
                                                                                                night_img, int(nightT), int(night_cloud),nightR,int(nightH)]

        return day, temp, humd, rain, pressure, ws, cloud, df, c, clear, rn

    def most_frequent(self, List):
        return max(set(List), key = List.count)

    def getCondFirst(self, cloud, rain, temp, humd, pressure, ws, hour_sin, hour_cos, month_sin, month_cos):
        c = []
        clear = []
        rn = []
        
        add = {
            'cloud':cloud,
            'rain':rain,
            't':temp,
            'hum':humd,
            'p':pressure,
            'ws':ws,
            'hour_cos':hour_cos,
            'hour_sin':hour_sin,
            'month_sin':month_sin,
            'month_cos':month_cos
        }
        df = pd.DataFrame(data = add)
        sc = MinMaxScaler()
        df[['t','ws','hum','p','cloud','rain']] = sc.fit_transform(df[['t','ws','hum','p','cloud','rain']])
        conditionList, c, clear, rn = self.getCond(df)

        return c, clear, rn

    def daySection(self, data, a):
        morn = []
        after = []
        night = []
        mid = []

        x = 0
        for i in data:
            if x <=5:
                mid.append(i)
            elif x <=11:
                morn.append(i)
            elif x <=17:
                after.append(i)
            elif x<=23:
                night.append(i)
            x = x+1
        
        if a == 1:
            morning = round(self.Average(morn),2)
            afternoon = round(self.Average(after),2)
            nightt = round(self.Average(night),2)
            midnight = round(self.Average(mid),2)
        else:
            morning = self.getImg(self.most_frequent(morn))
            afternoon = self.getImg(self.most_frequent(after))
            nightt = self.getImg(self.most_frequent(night))
            midnight = self.getImg(self.most_frequent(mid))

        return morning, afternoon, nightt, midnight

    def getImg(self, data):
        str = "images/"+data+".png"
        return str

    def Average(self, data):
        x = 0
        for i in data:
            x = x+i
        x = x/6
        return x

    def getMinMaxTemp(self, temp):
        return int(min(temp)), int(max(temp))

    def getCond(self, df):
        c = []
        clear = []
        rn = []

        condModel = load('website/model/cond.h5')
        df = df[['t','ws','hum','p','cloud','rain','hour_cos','hour_sin','month_sin','month_cos']]
        prediction = condModel.predict(df)
        conditionList = prediction.tolist()

        for x in conditionList:
            if(x == 'rain'):
                rn.append(1.0)
                clear.append(0.0)
                c.append(0.0)
            if(x == 'clouds'):
                rn.append(0.0)
                clear.append(0.0)
                c.append(1.0)
            if(x == 'clear'):
                rn.append(0.0)
                clear.append(1.0)
                c.append(0.0)

        return conditionList, c, clear, rn

    def getCloud(self, df):
        df = df[['t','hum','cond_is_clear','rain','hour_cos','hour_sin','month_sin','month_cos']]
        X = array(df[:72])
        X = X.reshape((1, 72, 8))

        cloudModel = load_model('website/model/cloud.h5')
        cloudP = cloudModel.predict(X)
        for i in range(0,24):
            if cloudP[0][i] < 0:
                cloudP[0][i] = 0
            elif cloudP[0][i] > 1:
                cloudP[0][i] = 1
        cloudP = self.getListPercentage(cloudP)

        return cloudP

    def getTemp(self, df):
        df = df[['cloud','hum','rain','hour_cos','hour_sin','month_cos','month_sin']]
        X = array(df[:72])
        X = X.reshape((1, 72, 7))

        tempModel = load_model('website/model/temp.h5')
        tempP = tempModel.predict(X)
        tempP = self.getList(tempP)
        
        return tempP

    def getHum(self, df):
        df = df[['p', 'cloud', 'rain', 'hour_cos', 'hour_sin', 'month_cos', 'month_sin']]
        X = array(df[:72])
        X = X.reshape((1, 72, 7))

        humModel = load_model('website/model/humidity.h5')
        humP = humModel.predict(X)
        humP = self.getListPercentage(humP)
        
        return humP

    def getwindSpeed(self, df, min_ws, max_ws):
        df = df[['p', 'cloud', 'rain', 't', 'hum','hour_cos', 'hour_sin', 'month_cos', 'month_sin']]
        X = array(df[:72])
        X = X.reshape((1, 72, 9))
        
        windModel = load_model('website/model/windspeed.h5')
        windP = windModel.predict(X)
        for i in range(0,24):
            if windP[0][i] < 0:
                windP[0][i] = 0
        windP = self.getList(windP)
        windP = self.scalarBack(windP, min_ws, max_ws)
        
        return windP

    def getAir(self, df, min_pressure, max_pressure):
        df = df[['t', 'hum', 'hour_cos', 'hour_sin', 'month_cos', 'month_sin']]
        X = array(df[:72])
        X = X.reshape((1, 72, 6))

        apModel = load_model('website/model/airpressure.h5')
        apP = apModel.predict(X)
        apP = self.getList(apP)
        apP = self.scalarBack(apP, min_pressure, max_pressure)
        
        return apP

    def getRain(self, df):
        df = df[['hum', 'cloud', 'p', 'hour_cos', 'hour_sin', 'month_cos', 'month_sin']]
        X = array(df[:72])
        X = X.reshape((1, 72, 7))

        rainModel = load_model('website/model/precipitation.h5')
        rainP = rainModel.predict(X)
        rainP = self.getList(rainP)
        
        return rainP

    def scalarBack(self, data, min_value, max_value):
        x = []
        for i in data:
            new = (i * (max_value - min_value)) + min_value
            x.append(new)
        
        return x

    def getListPercentage(self, data):
        x = []
        for i in data[0]:
            if i > 1:
                i = 1
            a = int(i * 100)
            x.append(a)
        return x

    def getList(self, data):
        x = []
        for i in data[0]:
            x.append(i)
        return x

    def getScalar(self, df):
        df['month'] = df['month'].astype(int)
        df['day'] = df['day'].astype(int)
        df['hour'] = df['hour'].astype(int)

        df['hour_cos'] = [np.cos(x * (2 * np.pi/24)) for x in df['hour']]
        df['hour_sin'] = [np.sin(x * (2 * np.pi/24)) for x in df['hour']]

        df['month_cos'] = [np.cos(x * (2 * np.pi/12)) for x in df['month']]
        df['month_sin'] = [np.sin(x * (2 * np.pi/12)) for x in df['month']]

        scaler = MinMaxScaler()
        df[['cloud', 'hum', 'p', 't', 'ws', 'rain']] = scaler.fit_transform(df[['cloud', 'hum', 'p', 't', 'ws', 'rain']])

        return df

    def getDate(self, df, years, months, days):
        year = df['year'].iloc[-1]
        month = df['month'].iloc[-1]
        day = df['day'].iloc[-1]

        date = str(year) + '/' + str(month) + '/' + str(day)

        new = datetime.strptime(date, '%Y/%m/%d')
        tmr = new + timedelta(1)
        dayy = tmr + timedelta(1)
        dayys = dayy.strftime('%A')
        
        for i in range(0, 24):
            y = tmr.strftime('%Y')
            m = tmr.strftime('%m')
            d = tmr.strftime('%d')

            years.append(y)
            months.append(m)
            days.append(d)
        
        tmr = dayy.strftime('%Y') + '/' + dayy.strftime('%m') + '/' + dayy.strftime('%d')

        return years, months, days, dayys, tmr

    def concatDF(self, df, years, months, days, hour, cloud, humd, c, clear, rn, pressure, temp, ws, rain):
        add = {'year':years, 
            'month':months, 
            'day':days, 
            'hour':hour, 
            'cloud':cloud, 
            'hum':humd,
            'cond_is_cloud':c,
            'cond_is_clear':clear, 
            'cond_is_rain':rn,
            'p':pressure, 
            't':temp, 
            'ws':ws, 
            'rain':rain}
        
        df = df.append(pd.DataFrame(add),ignore_index = True)
        df = df.iloc[24: , :]   

        return df

    def getMonthNHour(self, df):
        month_sin = []
        month_cos = []
        hour_sin = []
        hour_cos = []

        year = df['year'].iloc[-1]
        month = df['month'].iloc[-1]
        day = df['day'].iloc[-1]
        date = str(year) + '/' + str(month) + '/' + str(day)

        new = datetime.strptime(date, '%Y/%m/%d')
        tmr = new + timedelta(1)

        for i in range(0,24):
            m = tmr.strftime('%m')
            m = int(m)
            month_cos.append(np.cos(m * (2 * np.pi/12)))
            month_sin.append(np.sin(m * (2 * np.pi/12)))
            hour_sin.append(np.cos(i * (2 * np.pi/24)))
            hour_cos.append(np.sin(i * (2 * np.pi/24)))
        
        return month_sin, month_cos, hour_sin, hour_cos
    
    def __init__(self, df, dict) -> None:
        
        firstDay, secondDay, thirdDay, fourthDay, fifthDay, sixthDay, seventhDay= self.get7Day(df, dict)

        self.test1 = firstDay
        self.test2 = secondDay
        self.test3 = thirdDay
        self.test4 = fourthDay
        self.test5 = fifthDay
        self.test6 = sixthDay
        self.test7 = seventhDay