import os

# configuration to connect to database on heroku
# production environment (comment out line 10, uncomment line 5)
SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')

# development environment(comment out line 5, uncomment line 10)
# developer might have to get the uri from heroku > resource > heroku postgres > setting > database credentials > uri
# in case heroku changes the credentials
# SQLALCHEMY_DATABASE_URI = 'postgres://lprdxsyiahhfct:f44d8db20964da67efb43b7f2e95577097c752363445672105a306fa9a4b6c8a@ec2-44-196-250-191.compute-1.amazonaws.com:5432/depamo6hom3bg4'

if SQLALCHEMY_DATABASE_URI.startswith("postgres://"):
    SQLALCHEMY_DATABASE_URI = SQLALCHEMY_DATABASE_URI.replace("postgres://", "postgresql://", 1)
SECRET_KEY = os.environ.get('SECRET_KEY')
SQLALCHEMY_TRACK_MODIFICATIONS = False