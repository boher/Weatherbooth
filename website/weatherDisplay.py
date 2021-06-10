from flask import Blueprint, redirect, url_for, render_template, request, session, flash
from datetime import datetime, timedelta
import time
from website.current import startRun, getCurrent, getImg 
from website.twentyFourHour import gethourly, startHour
from website.sevenDay import getSevenDay

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
        'wsm': round(wsm, 2),
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

    day, dateS, condS, icon, tempMin, tempMax, humdMin, humdMax, prcpVolMin, prcpVolMax, airPreMin, airPreMax, avgWSMax, avgWSMin, cloudMin, cloudMax = getSevenDay()

    res ={
        'day': day,
        'date': dateS,
        'cond': condS,
        'icon': icon,
        'tempMin': tempMin,
        'tempMax': tempMax,
        'humdMin': humdMin,
        'humdMax': humdMax,
        'prcpVolMin': prcpVolMin,
        'prcpVolMax': prcpVolMax,
        'airPreMin': airPreMin,
        'airPreMax': airPreMax,
        'avgWSMax': avgWSMax,
        'avgWSMin': avgWSMin,
        'cloudMin': cloudMin,
        'cloudMax': cloudMax
    }
    return render_template('current.html', info = info, weather = weather, res = res)
