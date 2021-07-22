from flask import Flask, send_from_directory
from flask_restful import Api, Resource
from flask_cors import CORS # Comment this on deployment
from backendFlask.weatherDisplay import weatherDisplay

def createApp():
    app = Flask(__name__, static_url_path='', static_folder='frontendReact/build')
    CORS(app) # Comment this on deployment
    backendFlask = Api(app)

    @app.route("/", defaults={'path':''})
    def frontendReact(path):
        send_from_directory(app.static_folder, 'index.html')

    backendFlask.add_resource(weatherDisplay, '/getDisplay/')

    return app
