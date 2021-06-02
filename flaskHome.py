from flask import Flask, redirect, url_for, render_template, request, session, flash
from datetime import datetime
import time
from view.api import startRun, getCurrent, getPic

#ignore test.py, is just a place to test the API calling

app = Flask(__name__, template_folder= 'templates')

@app.route("/")
def homePage():
    dt = datetime.now()
    dt = int(time.mktime(dt.timetuple()))

    data = startRun(dt)
    dateTime, temp, condi, uvi, humd, cloud, ws, p = getCurrent(data)
    date = dateTime.split(' ')
    pic = getPic(condi)
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
        'pic': pic
    }
    return render_template('index.html', info = info)

if __name__ == "__main__":
    app.run(host="localhost", debug = True) # Simply refresh the opened webpage,
                            # but Python Shell requires manual restart to quit

