import os

# configuration to connect to database on heroku
# production environment (comment out line 10, uncomment line 5)
SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')

# development environment(comment out line 5, uncomment line 10)
# developer might have to get the uri from heroku > resource > heroku postgres > setting > database credentials > uri
# in case heroku changes the credentials
# SQLALCHEMY_DATABASE_URI = 'postgres://rgxjqgobbtljqs:f4447d822d9e1b2f6526bdf2b5ea54957e428bfaeabd178e32be3bb27550a4ab@ec2-54-145-185-178.compute-1.amazonaws.com:5432/dd2ajh9gg4035p'

if SQLALCHEMY_DATABASE_URI.startswith("postgres://"):
    SQLALCHEMY_DATABASE_URI = SQLALCHEMY_DATABASE_URI.replace("postgres://", "postgresql://", 1)
SECRET_KEY = os.environ.get('SECRET_KEY')
SQLALCHEMY_TRACK_MODIFICATIONS = False