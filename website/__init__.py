from flask import Flask
from .weatherDisplay import weatherDisplay
from .errorHandler import errorHandler
from .commands import create_tables
from .extensions import db
from .models import Feedback

def createApp(config_file='config.py'):

    app = Flask(__name__, template_folder= 'templates')

    #configure flask and its extensions
    app.config.from_pyfile(config_file)

    #initialize database
    db.init_app(app)

    # Register Flask Blueprint routes
    app.register_blueprint(weatherDisplay, url_prefix='/')
    app.register_blueprint(errorHandler)
    
    #add command to create table
    app.cli.add_command(create_tables)
    
    return app
