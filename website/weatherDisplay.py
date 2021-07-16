from flask import Blueprint, render_template
from website.current import CurrentHourWeather
from website.twentyFourHour import TwentyFourHourWeather
from website.sevenDay import SevenDayWeather


weatherDisplay = Blueprint('weatherDisplay', __name__)

@weatherDisplay.route("/")
def currentPage():

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
    s = SevenDayWeather(dataframe, tf)
    res ={
        'test1':s.test1,
        'test2':s.test2,
        'test3':s.test3,
        'test4':s.test4,
        'test5':s.test5,
        'test6':s.test6,
        'test7':s.test7
    }

    return render_template('index.html', current = current, tfHour = tfHour, res = res)