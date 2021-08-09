import click
from flask.cli import with_appcontext

from .extensions import db
from .models import Feedback

#command to create table feedback
#type 'flask create tables' on heroku console
@click.command(name='create_tables')
@with_appcontext
def create_tables():
    db.create_all()