from flask import Flask, redirect, url_for, render_template, request, session
from datetime import datetime, timedelta

app = Flask(__name__, template_folder= 'templates')

@app.route("/")
def homePage():
    return render_template("index.html")

@app.route('/hourly')
def hourly():
    return render_template('hourly.html')

@app.route('/weekly')
def weekly():
    return render_template('weekly.html')

@app.route("/search", methods=["POST", "GET"])
def search():
    searchedString = request.args.get("search") # TODO: Matched against DB
    return render_template("search.html")

@app.route("/location", methods=["POST", "GET"])
def location():
    if request.method == "POST":
        location = request.form["name"]
        dt = str(datetime.now().isoformat(timespec='seconds', sep=' '))
        return render_template("location.html", location = location, dt = dt)
    else:
        return render_template("location.html")

if __name__ == "__main__":
    app.run(host="localhost", debug = True) # Simply refresh the opened webpage
