from flask import Blueprint, render_template, request, redirect
from website.current import CurrentHourWeather
from website.twentyFourHour import TwentyFourHourWeather
from website.sevenDay import SevenDayWeather
from website.extensions import db
from website.models import Feedback
import json
import time

weatherDisplay = Blueprint('weatherDisplay', __name__)

@weatherDisplay.route("/feedback", methods=['GET','POST'])
def feedback():
    info = {"current":request.form['curhr'], "tfHour":request.form['twfhr'], "sDay":request.form['svndy']}
    question = Feedback(prediction = info)
    try:
        db.session.add(question)
    except:
        db.session.rollback()
        raise
    finally:
        db.session.commit()
        db.session.close()

    return ('', 204)

@weatherDisplay.route("/", methods=['GET','POST'])
def currentPage():
    try:
        # current.py
        c = CurrentHourWeather()
        current ={
            'temp': c.temp,
            'cond': c.cond,
            'date': c.date,
            'time': c.time,
            'uvi': c.uvi,
            'humd': c.humd,
            'cloud': c.cloud,
            'ws': c.ws,
            'p': c.p,
            'img': c.img,
            'rain': c.rain,
        }

        # twentyFourHour.py
        tf = TwentyFourHourWeather()
        tfHour = {
            't': tf.t,
            'h': tf.h,
            'pe': tf.pe,
            'a': tf.a,
            "w": tf.w,
            "c": tf.c
        }

        # sevenDay.py
        dataframe = tf.getDataFrame()
        s = SevenDayWeather(dataframe, tf)
        sepDay ={
            'day1':s.day1,
            'day2':s.day2,
            'day3':s.day3,
            'day4':s.day4
        }

        return render_template('index.html', current = current, tfHour = tfHour, sepDay = sepDay)
    except Exception as error:
        return render_template('error500.html', error = error)