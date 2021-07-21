from flask import Flask
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS # Comment this on deployment

def createApp():
    app = Flask(__name__, static_url_path='', static_folder='frontendReact/build')
    CORS(app) # Comment this on deployment
    backendFlask = Api(app)

    # Register Flask Blueprint routes
    from .weatherDisplay import weatherDisplay
    app.register_blueprint(weatherDisplay, url_prefix='/')

    return app
