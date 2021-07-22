from flask import Blueprint, jsonify, url_for, send_from_directory, request, flash
from flask_restful import Api, Resource, reqparse
from backendFlask.current import CurrentHourWeather
from backendFlask.twentyFourHour import TwentyFourHourWeather
from backendFlask.sevenDay import SevenDayWeather

class weatherDisplay(Resource):
    def get(self):
        
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
        tfHour = [tf.tfHourDict]

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

        # weatherDisplay = {"current" : current, "tfHour" : tfHour, "sevenDay" : sevenDay}

        return jsonify({"current" : current, "sevenDay" : sevenDay})
