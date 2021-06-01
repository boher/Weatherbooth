import requests
import json
from datetime import datetime

api_key = "5fbf6df2ae8f85211572ef4cb10989e5"
lat = "1.3521"
lon = "103.8198"
url = "https://api.openweathermap.org/data/2.5/onecall?lat=%s&lon=%s&appid=%s&units=metric&dt=1622529919" % (lat, lon, api_key)

response = requests.get(url)
data = json.loads(response.text)
'''
hourly = data["hourly"]
hum_list = []
for i in hourly:
    hum_list.append(i["humidity"])
'''

#print(max(hum_list), ' ', min(hum_list))

current = data["current"]
daily = data["daily"]

#print(json.dumps(current, indent=4, sort_keys=True))
print(json.dumps(current, indent=4, sort_keys=True))

#print(data)