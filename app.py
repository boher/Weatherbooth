from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS, cross_origin
from backendFlask.current import CurrentHourWeather

app = Flask(__name__, static_folder='frontendReact/build', static_url_path='')

CORS(app)

@app.route('/api', methods=['GET'])
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

    return jsonify({"current" : current})

@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == "__main__":
    app.run()