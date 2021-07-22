from flask import Blueprint, jsonify, url_for, send_from_directory, request, flash
from flask_restful import Api, Resource, reqparse
from backendFlask.current import CurrentHourWeather
from backendFlask.twentyFourHour import TwentyFourHourWeather
from backendFlask.sevenDay import SevenDayWeather

class weatherDisplay(Resource):
<<<<<<< HEAD
    def get(self):
        
=======

    def get(self):
    
>>>>>>> 59547a65de2030f19e01346a5d82e66102146f03
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
<<<<<<< HEAD
        tfHour = [tf.tfHourDict]
=======
        tfHour = {
            't': tf.t,
            'h': tf.h,
            'pe': tf.pe,
            'a': tf.a,
            "w": tf.w,
            "c": tf.c
        }
>>>>>>> 59547a65de2030f19e01346a5d82e66102146f03

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

<<<<<<< HEAD
=======
        # CHART_ENDPOINT = url_for('weatherDisplay.get24HourJSON')

>>>>>>> 59547a65de2030f19e01346a5d82e66102146f03
        # weatherDisplay = {"current" : current, "tfHour" : tfHour, "sevenDay" : sevenDay}

        return jsonify({"current" : current, "sevenDay" : sevenDay})
