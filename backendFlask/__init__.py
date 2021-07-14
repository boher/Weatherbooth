from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS # Comment this on deployment

def createApp():
    app = Flask(__name__, static_url_path='', static_folder='frontendReact/build')
    CORS(app) # Comment this on deployment
    #backendFlask = Api(app)

    # Register Flask Blueprint routes
    from .weatherDisplay import weatherDisplay
    app.register_blueprint(weatherDisplay, url_prefix='/')

    @weatherDisplay.route("/", defaults={'path':''})
    @weatherDisplay.route('/<path:path>')
    def frontendReact(path):
        if path != "" and os.path.exists("weatherDisplay.static_folder" + path):
            return send_from_directory('weatherDisplay.static_folder', path)
        else:
            return send_from_directory(weatherDisplay.static_folder, 'index.html')

    return app
