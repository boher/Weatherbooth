from flask import Flask, jsonify, send_from_directory, request
from flask_cors import CORS, cross_origin
import json

from backendFlask.current import CurrentHourWeather
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
def index():

    c = CurrentHourWeather()
    current  = [{
        
        "id": "Current",
        "temp": int(c.temp),
        "cond": c.cond,
        "date": c.date[0],
        "time": c.date[1],
        "uvi": round(c.uvi,2),
        "humd": c.humd,
        "cloud": c.cloud,
        "ws": c.ws,
        "p": c.p,
        "img": c.img,
        "rain": c.rain,
    }]

    if request.method == 'POST':

        info = json.dumps({"current" : current})

        data = Feedback(info)
        db.session.add(data)
        db.session.commit()

        return {"message": f"Feedback has been created successfully."}

    else:
        return jsonify({"current" : current})

@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == "__main__":
    app.run()