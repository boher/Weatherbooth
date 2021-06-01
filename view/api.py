import requests
import json
from datetime import datetime

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
    for i in data["current"]["weather"]:
        condi = i["main"]

    ts = int(current)
    dateTime = datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')

    return dateTime, temp, condi, uvi, humd, cloud, ws, p

