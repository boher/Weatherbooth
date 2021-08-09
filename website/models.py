from .extensions import db
from datetime import datetime
from sqlalchemy.dialects.postgresql import JSON

#create feedback table with two column id and prediction
class Feedback(db.Model):
    id = db.Column(db.Integer, autoincrement = True, primary_key=True)
    prediction = db.Column(JSON, nullable=False)