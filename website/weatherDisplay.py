from website.models import Feedback
from flask import Blueprint, render_template, request, redirect
from website.current import CurrentHourWeather
from website.twentyFourHour import TwentyFourHourWeather
from website.sevenDay import SevenDayWeather
from website.extensions import db
from website.models import Feedback
import json
import time

weatherDisplay = Blueprint('weatherDisplay', __name__)

@weatherDisplay.route("/feedback", methods=['POST'])
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

@weatherDisplay.route("/", methods=['GET', 'POST'])
def currentPage():

    # current.py
    start = time.time()
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
    end = time.time()
    print("curr")
    print(end-start)

    # twentyFourHour.py
    start = time.time()
    tf = TwentyFourHourWeather()
    tfHour = {
        't': tf.t,
        'h': tf.h,
        'pe': tf.pe,
        'a': tf.a,
        "w": tf.w,
        "c": tf.c
    }
    end = time.time()
    print("tf")
    print(end-start)

    # sevenDay.py
    start = time.time()
    dataframe = tf.getDataFrame()
    s = SevenDayWeather(dataframe, tf)
    sepDay ={
        'day1':s.day1,
        'day2':s.day2,
        'day3':s.day3,
        'day4':s.day4
    }
    end = time.time()
    print("s")
    print(end-start)

    prediction = {"current":str(current), "tfHour":str(tfHour), "sDay":str(sepDay)}

    start = time.time()
    if request.method == 'POST':
        action = request.form['action']
        if action =='no':

            info = prediction

            question = Feedback(
                prediction=info
            )
            try:
                db.session.add(question)
            except:
                db.session.rollback()
                raise
            finally:
                db.session.commit()
                db.session.close()
    end = time.time()
    print("db")
    print(end-start)

    return render_template('index.html', current = current, tfHour = tfHour, sepDay = sepDay)