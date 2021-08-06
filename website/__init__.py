from flask import Flask
from .weatherDisplay import weatherDisplay
from .errorHandler import errorHandler
from .commands import create_tables
from .extensions import db
from .models import Feedback

def createApp(config_file='config.py'):

    app = Flask(__name__, template_folder= 'templates')

    app.config.from_pyfile(config_file)

    db.init_app(app)

    # Register Flask Blueprint routes
    app.register_blueprint(weatherDisplay, url_prefix='/')
    app.register_blueprint(errorHandler)
    
    app.cli.add_command(create_tables)

    # Try handling 404 error in errorHandler.py w Blueprints, if can't code below would handle 404 error, 500 error in weatherDisplay.py
    #app.errorhandler(404)
    
    return app
