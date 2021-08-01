import requests
import json
from datetime import datetime
import time
import pytz

class CurrentHourWeather:
    
    def startRun(self, dt):
        api_key = "5fbf6df2ae8f85211572ef4cb10989e5"
        lat = "1.3521"
        lon = "103.8198"
        url = "https://api.openweathermap.org/data/2.5/onecall?lat=%s&lon=%s&appid=%s&units=metric&dt=%s" % (lat, lon, api_key, dt)

        response = requests.get(url)
        data = json.loads(response.text)
        return data
    
    def getCurrent(self, data):
        kl=pytz.timezone('Asia/Kuala_Lumpur')

        current = data["current"]["dt"]
        temp = data["current"]["temp"]
        uvi = data["current"]["uvi"]
        humd = data["current"]["humidity"]
        cloud = data["current"]["clouds"]
        ws = data["current"]["wind_speed"]
        p = data["current"]["pressure"]
        rain = self.ifRain(data)
        condi = data["current"]["weather"][0]['main']

        dateTime = datetime.fromtimestamp(current)
        dateTime = dateTime.astimezone(kl)
        dateTime = dateTime.strftime('%Y-%m-%d %H:%M:%S')

        return dateTime, temp, condi, uvi, humd, cloud, ws, p, rain

    def getImg(self, condi):
        str = "images/"+condi+".jpeg"
        return str

    def ifRain(self, data):
        if "rain" in data["current"]:
            return data["current"]["rain"]['1h']
        else:
            return 0

    def __init__(self) -> None:

        dt = datetime.now()
        dt = int(time.mktime(dt.timetuple()))
        data = self.startRun(dt)

        dateTime, temp, condi, uvi, humd, cloud, ws, p, rain = self.getCurrent(data)
        img = self.getImg(condi)
        date = dateTime.split(' ')

        self.temp = int(temp)
        self.cond = condi
        self.uvi = round(uvi,2)
        self.humd = humd
        self.cloud = cloud
        self.ws = ws
        self.p = p
        self.rain = rain
        self.img = img
        self.date = date[0]
        self.time = date[1]