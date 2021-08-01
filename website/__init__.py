from flask import Flask
from .weatherDisplay import weatherDisplay
from .commands import create_tables
from .extensions import db
from .models import Feedback

def createApp(config_file='config.py'):

    app = Flask(__name__, template_folder= 'templates')

    app.config.from_pyfile(config_file)

    db.init_app(app)

    # Register Flask Blueprint routes
    app.register_blueprint(weatherDisplay, url_prefix='/')
    app.cli.add_command(create_tables)
    
    return app
