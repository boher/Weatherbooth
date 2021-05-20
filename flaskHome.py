from flask import Flask, redirect, url_for, render_template, request, session
from datetime import timedelta

app = Flask(__name__)

@app.route("/")
def homePage():
    return render_template("index.html")

@app.route("/<name>") # URL appended String var passed as param to userPage()
def locationPage(name):
    return f"Showing weather for {name}" # f-String avail from python3.6 onwards,
                        # basically String formatter as seen in Java etc.

@app.route("/search", methods=["POST", "GET"])
def search():
    searchedString = request.args.get("search") # TODO: Matched against DB
    return render_template("search.html")

@app.route("/location", methods=["POST", "GET"])
def location():
    if request.method == "POST":
        location = request.form["name"]
        return redirect(url_for("locationPage", name=location))
    else:
        return render_template("location.html")

if __name__ == "__main__":
    app.run(debug = True) # Simply refresh the opened webpage instead of running
