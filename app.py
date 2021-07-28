from flask import Flask, jsonify, send_from_directory, request
from flask_cors import CORS, cross_origin
import json

from backendFlask.current import CurrentHourWeather
from backendFlask.twentyFourHour import TwentyFourHourWeather
from backendFlask.sevenDay import SevenDayWeather
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from sqlalchemy.dialects.postgresql import JSON

app = Flask(__name__, static_folder='frontendReact/build', static_url_path='')
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://sonrjhelalcejy:0f6667c4fe9e5dcc8bba824583d1234816267d6f12c792c236886bc7d098a25a@ec2-34-228-100-83.compute-1.amazonaws.com:5432/df4u9rnrt532cq'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 
db = SQLAlchemy(app)
migrate = Migrate(app, db)

class Feedback(db.Model):
    
    __tablename__ = 'feedback'
    
    id = db.Column(db.Integer, primary_key=True)
    info = db.Column(JSON)

    def __init__(self, info):
        self.info = info 

@app.route('/api', methods=['GET', 'POST'])
@cross_origin()
def getDisplay():

    # current.py
    c = CurrentHourWeather()
    current  = [{
    
        "temp": int(c.temp),
        "cond": c.cond,
        "date": c.date,
        "time": c.time,
        "uvi": round(c.uvi,2),
        "humd": c.humd,
        "cloud": c.cloud,
        "ws": c.ws,
        "p": c.p,
        "img": c.img,
        "rain": c.rain,
    }]

    # twentyFourHour.py
    tf = TwentyFourHourWeather()
    tfHour = tf.tfHour

    # sevenDay.py
    dataframe = tf.getDataFrame()
    sdObj = SevenDayWeather(dataframe, tf)

    sevenDay = [
        sdObj.day1, 
        sdObj.day2, 
        sdObj.day3, 
        sdObj.day4, 
        sdObj.day5, 
        sdObj.day6, 
        sdObj.day7
    ]

    if request.method == 'POST':

        # JSON info dumped for PostGreSQL Feedback DB
        info = json.dumps({"current" : current})

        data = Feedback(info)
        db.session.add(data)
        db.session.commit()

        return {"message": f"Feedback has been created successfully."}

    else:
        # Flask API JSON return
        weatherDisplay = {"current" : current, "tfHour" : tfHour, "sevenDay" : sevenDay}

        return jsonify(weatherDisplay)

@app.route('/')
@cross_origin()
def servePage():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == "__main__":
    app.run()