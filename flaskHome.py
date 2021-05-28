from flask import Flask, redirect, url_for, render_template, request, session
from datetime import datetime, timedelta

app = Flask(__name__, template_folder= 'templates')

@app.route("/")
def base():
    dt = str(datetime.now().isoformat(timespec='seconds', sep=' '))
    date = dt.split(' ')
    info ={
        'temp': 32,
        'cond': 'Sunny',
        'date': date[0],
        'time': date[1]
    }
    return render_template('base.html', info = info)

'''
@app.route("/", methods=["POST", "GET"])
def homePage():
    if request.method == "POST":
        location = request.form["location"]
        dt = str(datetime.now().isoformat(timespec='seconds', sep=' '))
        return render_template("current.html", location = location, dt = dt)
    else:
        return render_template("current.html")

@app.route('/hourly', methods=["POST", "GET"])
def hourly():
    if request.method == "POST":
        location = request.form["location"]
        dt = str(datetime.now().isoformat(timespec='seconds', sep=' '))
        return render_template("hourly.html", location = location, dt = dt)
    else:
        return render_template('hourly.html')

@app.route('/weekly', methods=["POST", "GET"])
def weekly():
    if request.method == "POST":
        location = request.form["location"]
        dt = str(datetime.now().isoformat(timespec='seconds', sep=' '))
        return render_template("weekly.html", location = location, dt = dt)
    else:
        return render_template('weekly.html')

@app.route("/search", methods=["POST", "GET"])
def search():
    searchedString = request.args.get("search") # TODO: Matched against DB
    return render_template("search.html")

##@app.route("/location", methods=["POST", "GET"])
##def location():
##    if request.method == "POST":
##        location = request.form["location"]
##        dt = str(datetime.now().isoformat(timespec='seconds', sep=' '))
##        return render_template("location.html", location = location, dt = dt)
##    else:
##        return render_template("location.html")
'''
if __name__ == "__main__":
    app.run(host="localhost", debug = True) # Simply refresh the opened webpage,
                            # but Python Shell requires manual restart to quit
