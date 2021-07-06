from flask import Flask, redirect, url_for, request, session, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from backendFlask.HelloApiHandler import HelloApiHandler

app = Flask(__name__, static_url_path='', static_folder='frontendReact/build')
CORS(app) #comment this on deployment
backendFlask = Api(app)

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

backendFlask.add_resource(HelloApiHandler, '/')

if __name__ == "__main__":
    app.run(host="localhost", debug = True) # Simply refresh the opened webpage instead of running
