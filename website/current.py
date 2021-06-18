import requests
import json
from datetime import datetime
import matplotlib.pyplot as plt

def startRun(dt):
    api_key = "5fbf6df2ae8f85211572ef4cb10989e5"
    lat = "1.3521"
    lon = "103.8198"
    url = "https://api.openweathermap.org/data/2.5/onecall?lat=%s&lon=%s&appid=%s&units=metric&dt=%s" % (lat, lon, api_key, dt)

    response = requests.get(url)
    data = json.loads(response.text)
    return data

def getCurrent(data):
    current = data["current"]["dt"]
    temp = data["current"]["temp"]
    uvi = data["current"]["uvi"]
    humd = data["current"]["humidity"]
    cloud = data["current"]["clouds"]
    ws = data["current"]["wind_speed"]
    p = data["current"]["pressure"]
    rain = ifRain(data)
    for i in data["current"]["weather"]:
        condi = i["main"]

    ts = int(current)
    dateTime = datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')

    return dateTime, temp, temp-2, condi, uvi, humd, humd-2, cloud, cloud-2, ws, ws-0.2, p, p-100, rain

def getImg(condi):
    str = "images/"+condi+".jpeg"
    return str

def ifRain(data):
    rain = "rain" in data["current"]

    if rain == True:
        r = data["current"]["rain"]
        return r.get('1h')
    else:
        return 0