from flask import Blueprint, render_template, request, redirect
from website.current import CurrentHourWeather
from website.twentyFourHour import TwentyFourHourWeather
from website.fourDay import FourDayWeather
from website.extensions import db
from website.models import Feedback
import json
import time

weatherDisplay = Blueprint('weatherDisplay', __name__)

# To add feedback into the database
@weatherDisplay.route("/feedback", methods=['POST'])
def feedback():

    # Dictionary of current (from API), twenty four hour and four day data (predicted data)
    info = {"current":request.form['curhr'], "tfHour":request.form['twfhr'], "sDay":request.form['svndy']}
    # Create feedback model object with the dictionary
    record = Feedback(prediction = info)
    try:
        # Add record to feedback DB tables
        db.session.add(record)
    except:
        db.session.rollback()
        raise
    finally:
        # Commit the changes and close the session
        db.session.commit()
        db.session.close()

    return ('', 204)

@weatherDisplay.route("/", methods=['GET'])
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
        s = FourDayWeather(dataframe, tf)
        sepDay ={
            'day1':s.day1,
            'day2':s.day2,
            'day3':s.day3,
            'day4':s.day4
        }

        return render_template('index.html', current = current, tfHour = tfHour, sepDay = sepDay)
    # Custom handling of 500 internal server error
    except Exception as error:
        return render_template('error500.html', error = error)