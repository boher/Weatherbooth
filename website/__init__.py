from flask import Flask

def createApp():
    app = Flask(__name__, template_folder= 'templates')

    # Register Flask Blueprint routes
    from .weatherDisplay import weatherDisplay
    app.register_blueprint(weatherDisplay, url_prefix='/')

    return app
