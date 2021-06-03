from flask import Flask

def createApp():
    app = Flask(__name__, template_folder= 'templates')

    # Register Flask Blueprint routes
    from .current import current
    app.register_blueprint(current, url_prefix='/')

    return app
