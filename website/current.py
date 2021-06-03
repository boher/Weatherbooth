from flask import Blueprint, redirect, url_for, render_template, request, session, flash
from datetime import datetime
import time
from website.api import startRun, getCurrent, getImg

current = Blueprint('current', __name__)

@current.route("/")
def currentPage():
    dt = datetime.now()
    dt = int(time.mktime(dt.timetuple()))

    data = startRun(dt)
    dateTime, temp, condi, uvi, humd, cloud, ws, p = getCurrent(data)
    date = dateTime.split(' ')
    img = getImg(condi)
    info ={
        'temp': int(temp),
        'cond': condi,
        'date': date[0],
        'time': date[1],
        'uvi': uvi,
        'humd': humd,
        'cloud': cloud,
        'ws': ws,
        'p': p,
        'img': img
    }
    return render_template('current.html', info = info)
