from website.models import Feedback
from flask import Blueprint, render_template, request, redirect
from website.current import CurrentHourWeather
from website.twentyFourHour import TwentyFourHourWeather
from website.sevenDay import SevenDayWeather
from website.extensions import db
from website.models import Feedback

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

@weatherDisplay.route("/", methods=['GET', 'POST'])
def currentPage():

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
        'test1':s.test1,
        'test2':s.test2,
        'test3':s.test3,
        'test4':s.test4
    }

    return render_template('index.html', current = current, tfHour = tfHour, sepDay = sepDay)