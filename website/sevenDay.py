from flask import Blueprint, redirect, url_for, render_template, request, session, flash
from datetime import datetime, timedelta
import time
from website.current import startRun, getCurrent, getImg
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
import numpy as np
from tensorflow.keras.models import load_model
from numpy import array

firstDate = ''
firstDay =''
firstCond = ''
firstImg =''
firstMin =''
firstMax =''

firstMornImg = ''
firstMornTemp = ''
firstMornHum = ''
firstMornRain = ''

firstAfterImg = ''
firstAfterTemp = ''
firstAfterHum = ''
firstAfterRain =''

firstNightImg = ''
firstNightTemp = ''
firstNightHum = ''
firstNightRain =''

firstMidImg = ''
firstMidTemp = ''
firstMidHum = ''
firstMidRain =''

firstDay =[]
secondDay =[]
thirdDay =[]
fourthDay =[]
fifthDay =[]
sixthDay =[]
seventhDay =[]

def getSevenDay():
    day = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
    date = ['2021-06-06', '2021-06-07', '2021-06-08', '2021-06-09', '2021-06-10', '2021-06-11', '2021-06-12'] 
    cond = ['Rain', 'Drizzle', 'Clear', 'Rain', 'Clouds', 'Drizzle', 'Clouds']
    icon = ['10d','09d','01d','10d','02d','09d','02d']
    tempMin = [27, 27, 26, 27, 26, 27, 27]
    tempMax = [30, 30, 30, 30, 30,29, 29]
    humdMin = [65, 71, 59, 60, 63, 62, 70]
    humdMax = [68, 75, 65, 62, 66, 70, 77]
    prcpVolMin =  [0.62, 0.55, 0.10, 0.78, 0.99, 0.44, 0.75]
    prcpVolMax = [0.75, 0.70, 0.50, 0.90, 1, 0.70, 0.85]
    airPreMin = [1009, 1010, 1010, 1010, 1010, 1008, 1008]
    airPreMax = [1011, 1015, 1015, 1015, 1016, 1010, 1011]
    avgWSMin = [4.69, 5.25, 4.74, 4.15, 5.32, 4.35, 3.77]
    avgWSMax = [5, 6, 5, 5.5, 6.5, 5.75, 4.25]
    cloudMin = [77, 94, 99, 92, 82, 84, 80]
    cloudMax = [80, 95, 100, 100, 99, 94, 100]

    return day, date, cond, icon, tempMin, tempMax, humdMin, humdMax, prcpVolMin, prcpVolMax, airPreMin, airPreMax, avgWSMax, avgWSMin, cloudMin, cloudMax

def testing(dataframe, tfhour):
    temp = tfhour['t']
    humd = tfhour['h']
    rain = tfhour['pe']
    pressure = tfhour['a']
    ws = tfhour['w']
    cloud = tfhour['c']

    df_new = dataframe[['year', 'month', 'day', 'hour', 'cloud', 'hum', 'p', 't','cond_is_cloud','cond_is_clear', 'cond_is_rain', 'ws', 'rain']]
    print(df_new)

    for i in range(1, 7):
        years = []
        months = []
        days = []
        hour = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
        c = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        clear = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
        rn = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1]

        years, months, days, weekdays, dates = getDate(df_new, years, months, days)
        df_new = concatDF(df_new, years, months, days, hour, cloud, humd, c, clear, rn, pressure, temp, ws, rain)
        min_pressure = df_new['p'].min()
        max_pressure = df_new['p'].max()

        min_ws = df_new['ws'].min()
        max_ws = df_new['ws'].max()
        df_new = getScalar(df_new)

        #temp = getTemp(df)
        humd = getHum(df_new)
        ##rain = getRain(df)
        #pressure = getAir(df, min_pressure, max_pressure)
        ws = getwindSpeed(df_new, min_ws, max_ws)
        #cloud = getCloud(df)

        return max_pressure

def getHum(df):
    df = df[['p', 'cloud', 'rain', 'hour_cos', 'hour_sin', 'month_cos', 'month_sin']]
    X = array(df[:72])
    X = X.reshape((1, 72, 7))

    humModel = load_model('website/model/humidity.h5')
    humP = humModel.predict(X)
    humP = getListPercentage(humP)
    return humP

def getwindSpeed(df, min_ws, max_ws):
    df = df[['p', 'cloud', 'rain', 't', 'hum','hour_cos', 'hour_sin', 'month_cos', 'month_sin']]
    X = array(df[:72])
    X = X.reshape((1, 72, 9))

    windModel = load_model('website/model/windspeed.h5')
    windP = windModel.predict(X)
    windP = getList(windP)
    windP = scalarBack(windP, min_ws, max_ws)
    return windP

def getAir(df, min_pressure, max_pressure):
    df = df[['t', 'hum', 'hour_cos', 'hour_sin', 'month_cos', 'month_sin']]
    X = array(df[:72])
    X = X.reshape((1, 72, 6))

    apModel = load_model('website/model/airpressure.h5')
    apP = apModel.predict(X)
    apP = getList(apP)
    apP = scalarBack(apP, min_pressure, max_pressure)
    return apP

def getRain(df):
    df = df[['hum', 'cloud', 'p', 'hour_cos', 'hour_sin', 'month_cos', 'month_sin']]
    X = array(df[:72])
    X = X.reshape((1, 72, 7))

    rainModel = load_model('website/model/precipitation.h5')
    rainP = rainModel.predict(X)
    rainP = getList(rainP)
    return X

def scalarBack(data, min_value, max_value):
    x = []
    for i in data:
        new = (i * (max_value - min_value)) + min_value
        x.append(new)
    
    return x

def getListPercentage(data):
    x = []
    for i in data[0]:
        a = i
        if(i < 1):
            a = int(i * 100)
        x.append(a)
    return x

def getList(data):
    x = []
    for i in data[0]:
        x.append(i)
    return x

def getScalar(df):
    df['month'] = df['month'].astype(int)
    df['day'] = df['day'].astype(int)
    df['hour'] = df['hour'].astype(int)

    df['hour_cos'] = [np.cos(x * (2 * np.pi/24)) for x in df['hour']]
    df['hour_sin'] = [np.sin(x * (2 * np.pi/24)) for x in df['hour']]

    df['month_cos'] = [np.cos(x * (2 * np.pi/12)) for x in df['month']]
    df['month_sin'] = [np.sin(x * (2 * np.pi/12)) for x in df['month']]

    scaler = MinMaxScaler()
    df[['cloud', 'hum', 'p', 't','cond_is_cloud','cond_is_clear', 'cond_is_rain', 'ws', 'rain']] = scaler.fit_transform(df[['cloud', 'hum', 'p', 't',
                                                                                                                                'cond_is_cloud','cond_is_clear', 'cond_is_rain', 'ws', 'rain']])

    return df

def getDate(df, years, months, days):
    year = df['year'].iloc[-1]
    month = df['month'].iloc[-1]
    day = df['day'].iloc[-1]

    date = str(year) + '/' + str(month) + '/' + str(day)

    new = datetime.strptime(date, '%Y/%m/%d')
    tmr = new + timedelta(1)
    dayy = tmr.strftime('%A')

    for i in range(0, 24):
        y = tmr.strftime('%Y')
        m = tmr.strftime('%m')
        d = tmr.strftime('%d')

        years.append(y)
        months.append(m)
        days.append(d)
    
    return years, months, days, dayy, tmr

def concatDF(df, years, months, days, hour, cloud, humd, c, clear, rn, pressure, temp, ws, rain):
    df_new = pd.DataFrame(list(zip(years, months, days, hour, cloud, humd, c, clear, rn, pressure, temp, ws, rain)),
               columns =['year', 'month', 'day', 'hour', 'cloud', 'hum', 'p', 't','cond_is_cloud','cond_is_clear', 'cond_is_rain', 'ws', 'rain'])

    df = df.iloc[24: , :]

    frames = [df, df_new]
    df = pd.concat(frames)

    return df