from flask import Blueprint, render_template
from website.current import CurrentHourWeather
from website.twentyFourHour import TwentyFourHourWeather
from website.sevenDay import SevenDayWeather


weatherDisplay = Blueprint('weatherDisplay', __name__)

@weatherDisplay.route("/")
def currentPage():

    current = CurrentHourWeather()

    tfHour = TwentyFourHourWeather()

    dataframe = tfHour.getDataFrame()
    sDay = SevenDayWeather(dataframe, tfHour)

    return render_template('index.html', current = current, tfHour = tfHour, res = sDay)