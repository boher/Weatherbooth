from flask import Blueprint, redirect, url_for, render_template, request, session, flash
from datetime import datetime, timedelta
import time
from website.current import startRun, getCurrent, getImg 
from website.twentyFourHour import gethourly, startHour

weatherDisplay = Blueprint('weatherDisplay', __name__)

@weatherDisplay.route("/")
def currentPage():
    dt = datetime.now()
    dt = int(time.mktime(dt.timetuple()))

    data = startRun(dt)
    dateTime, temp, tm, condi, uvi, humd, hm, cloud, cm, ws, wsm, p, pm, rain = getCurrent(data)
    date = dateTime.split(' ')
    img = getImg(condi)

    dt1 = datetime.now()- timedelta(1)
    dt1 = int(time.mktime(dt1.timetuple()))

    datahour = startHour(dt1)
    t, h, pe, a, w, c = gethourly(datahour)
    weather = {
        't': t,
        'h': h,
        'pe': pe,
        'a': a,
        "w": w,
        "c": c
    }

    info ={
        'temp': int(temp),
        'tm': int(tm),
        'hm': hm,
        'cm': cm,
        'wsm': wsm,
        'pm': pm,
        'cond': condi,
        'date': date[0],
        'time': date[1],
        'uvi': uvi,
        'humd': humd,
        'cloud': cloud,
        'ws': ws,
        'p': p,
        'img': img,
        'rain': rain
    }
    return render_template('current.html', info = info, weather = weather)
