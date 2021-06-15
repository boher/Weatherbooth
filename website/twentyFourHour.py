import requests
import json
from datetime import datetime

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
            temp.append(int(i["temp"]))
            hum.append(i["humidity"])
            air.append(i["pressure"])
            wind.append(i["wind_speed"])
            cloud.append(i["clouds"])

            rain = "rain" in i
            if rain == True:
                r = i["rain"]
                pre.append(r.get('1h'))
            else:
                pre.append(0)
        x = x+1

    return temp, hum, pre, air, wind, cloud