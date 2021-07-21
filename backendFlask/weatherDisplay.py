from flask import Blueprint, jsonify, url_for, send_from_directory, request, flash
from datetime import datetime
from backendFlask.current import CurrentHourWeather
from backendFlask.twentyFourHour import TwentyFourHourWeather
from backendFlask.sevenDay import SevenDayWeather
import os

weatherDisplay = Blueprint('weatherDisplay', __name__)

@weatherDisplay.route("/", defaults={'path':''})
@weatherDisplay.route('/<path:path>')
def frontendReact(path):
    if path != "" and os.path.exists("weatherDisplay.static_folder" + path):
        return send_from_directory('weatherDisplay.static_folder', path)
    else:
        return send_from_directory(weatherDisplay.static_folder, 'index.html')

@weatherDisplay.route("/getDisplay/")
def currentPage():
    
    c = CurrentHourWeather()
    current  = [{
        
        "temp": int(c.temp),
        "cond": c.cond,
        "date": c.date[0],
        "time": c.date[1],
        "uvi": round(c.uvi,2),
        "humd": c.humd,
        "cloud": c.cloud,
        "ws": c.ws,
        "p": c.p,
        "img": c.img,
        "rain": c.rain,
    }]

    tf = TwentyFourHourWeather()
    tfHour = {
        't': tf.t,
        'h': tf.h,
        'pe': tf.pe,
        'a': tf.a,
        "w": tf.w,
        "c": tf.c
    }

    dataframe = tf.getDataFrame()
    sdObj = SevenDayWeather(dataframe, tf)

    # ** Changed here **
    # Changed into a list of dictionaries
    sevenDay = [
        sdObj.day1, 
        sdObj.day2, 
        sdObj.day3, 
        sdObj.day4, 
        sdObj.day5, 
        sdObj.day6, 
        sdObj.day7
    ]

    # CHART_ENDPOINT = url_for('weatherDisplay.get24HourJSON')

    # weatherDisplay = {"current" : current, "tfHour" : tfHour, "sevenDay" : sevenDay}

    return jsonify({"current" : current, "sevenDay" : sevenDay})
