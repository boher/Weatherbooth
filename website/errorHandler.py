from flask import Blueprint, render_template

errorHandler = Blueprint('errorHandler', __name__)

@errorHandler.app_errorhandler(404)
def notFound(error):
    return render_template('error404.html')