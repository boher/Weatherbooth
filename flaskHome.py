from flask import Flask, redirect, url_for, render_template, request, session
from datetime import datetime

app = Flask(__name__, template_folder= 'templates')

@app.route("/")
def base():
    dt = str(datetime.now().isoformat(timespec='seconds', sep=' '))
    date = dt.split(' ')
    info ={
        'temp': 32,
        'cond': 'Sunny',
        'date': date[0],
        'time': date[1]
    }
    return render_template('index.html', info = info)

if __name__ == "__main__":
    app.run(host="localhost", debug = True) # Simply refresh the opened webpage,
                            # but Python Shell requires manual restart to quit
