from flask import Blueprint, redirect, url_for, render_template, request, session, flash
from datetime import datetime, timedelta
import time
from website.current import startRun, getCurrent, getImg 
from website.twentyFourHour import getHourly, startHour
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

    tfHour = get24HourJSON()

    current ={
        'temp': int(temp),
        'tm': int(tm),
        'hm': hm,
        'cm': cm,
        'wsm': round(wsm, 2),
        'pm': pm,
        'cond': condi,
        'date': date[0],
        'time': date[1],
        'uvi': round(uvi,2),
        'humd': humd,
        'cloud': cloud,
        'ws': ws,
        'p': p,
        'img': img,
        'rain': rain,
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
    return render_template('index.html', current = current, tfHour = tfHour, res = res, CHART_ENDPOINT = url_for('weatherDisplay.get24HourJSON'))

@weatherDisplay.route("/get24HourJSON")
def get24HourJSON():
    hourly = ["12am", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am",
             "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"]
    dt1 = datetime.now()- timedelta(1)
    dt1 = int(time.mktime(dt1.timetuple()))

    datahour = startHour(dt1)

    t, h, pe, a, w, c, hp = getHourly(datahour)
    tfHour = {
        't': t,
        'h': hp,
        'pe': pe,
        'a': a,
        "w": w,
        "c": c
    }
    
    query = request.args.get('query')
    print(query)

    '''tfHour = {'datasets': 
        [
            {'title': query,
            'data': [{'x': t, 'y': hourly}, {'x': h, 'y': hourly}, {'x': pe, 'y': hourly}, {'x': a, 'y': hourly}, {'x': w, 'y': hourly}, {'x': c, 'y': hourly}],
            },
        ]
    }'''
    return tfHour
