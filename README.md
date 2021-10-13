<p align="center">
  <img alt="Weatherbooth" title="Weatherbooth"
   src="https://github.com/boher/Weatherbooth/blob/main/website/static/images/weatherbooth.png" width="480"></img>
</p>

<h1 align="center"> Weatherbooth </h1>

<p align="center">
  <a href="https://www.gnu.org/licenses/agpl-3.0.en.html">
    <img alt="License: AGPL v3" src="https://img.shields.io/badge/License-AGPL%20v3-blue.svg">
  </a>
  <a href="https://www.python.org/">
    <img alt="Python Supported Version" src="https://img.shields.io/badge/python-3.6%2B-ff69b4.svg">
  </a>
  <a href="https://github.com/boher/Weatherbooth/actions?query=workflow%3A'python-package'">
    <img alt="Build Status" src="https://github.com/boher/Weatherbooth/actions/workflows/python-package.yml/badge.svg")]
  </a>
  <a href="https://api.github.com/repos/boher/Weatherbooth/commits/main">
    <img alt="Last Commit" src="https://img.shields.io/github/last-commit/boher/Weatherbooth.svg">
  </a>
</p>
  
A web-application that aims to keep the general public in Singapore well-informed and well-prepared with accurate weather forecasts

Based on weather models trained by machine learning algorithms, namely:
  
- Long Short-Term Memory (LSTM) for time series analysis

- Decision Tree for classification

<br>
  
Data obtained from various historical weather APIs are normalized with Min/Max Scalar before processing

<hr>

## Screenshots
| Current Weather Observations          | Hourly Weather Predictions (24 Hour)  | Daily Weather Predictions (4 days)      |
|---------------------------------------|---------------------------------------|-----------------------------------------|
| ![](screenshots/01_current.png)       | ![](screenshots/02_hourly.png)        | ![](screenshots/03_daily.png)           |

## Running your own instance locally
### Assumptions: 
- Open source and personal use only
- Python3 has been installed and added to the PATH environment variables
- macOS 10.15 and above or Windows 10 and above

### Steps to perform:
Step-1: Clone the repository (main branch)
<br>
<br>
Step-2: Open the terminal or command-line prompt
<br>
<br>
Step-3: Copy the local file path of the cloned repository
<br>
<br>
Step-4: Navigate to the directory containing the cloned repository with the command `cd <file-path-copied>`
<br>
<br>
Step-5: Install the required python dependencies for this project by running the command `pip install -r requirements.txt`
<br>
<br>
Step-7: Navigate to the subdirectory folder (./Weatherbooth/website) and open config.py in a text editor
<br>
<br>
Step-8: Comment out line 5 and uncomment line 10 in config.py and save the file
<br>
<br>
Step-9: Execute the app by running the command `python app.py` in the terminal or command-line and click on the link provided `http://localhost:5000/`

## Directory Markdown
![Directory Markdown](https://i.ibb.co/2kz4XRK/directory-markdown.png)

## Licensing
Licensed under [GNU Affero General Public License v3](LICENSE)

The current version of Weatherbooth is hosted at https://weatherbooth.herokuapp.com

Any reproductions of this webapp hosted publicly must be open source, generate your own unique key for DB creation and include a explicit link crediting the developers of Weatherbooth.

## Special thanks

### Development tools and modules used:
[Flask](https://flask.palletsprojects.com/en/2.0.x/ "Flask Documentation") as our backend (Deployed version and REST API version)
<br>
[Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) as our CSS framework
<br>
[Chart.js](https://www.chartjs.org/docs/latest/) for visualizing hourly weather predictions
<br>
[React](https://github.com/facebook/react/blob/main/README.md) supported with [API requests](https://axios-http.com/docs/intro), [route navigation](https://reactrouter.com/web/guides), wrappers for [Bootstrap](https://react-bootstrap.github.io/getting-started/introduction/) and [Chart.js](https://github.com/chartjs/Chart.js/releases) dependencies as our frontend (REST API version)
<br>
[Tensorflow](https://www.tensorflow.org/guide/keras/rnn) for modeling data pipelines of target weather attributes, to predict hourly and daily values for the next few days
<br>
[Scikit](https://scikit-learn.org/stable/auto_examples/preprocessing/plot_all_scaling.html#minmaxscaler)[-learn](https://scikit-learn.org/stable/modules/tree.html) for preprocessing data and classification of weather conditions
<br>
[Heroku](https://devcenter.heroku.com/categories/reference "Heroku Documentation") for easy CI/CD with GitHub and Student Developer Pack
<br>
### Open source weather APIs:
[OpenWeatherMap](https://openweathermap.org/api) for their generous offers of various weather data APIs for free-tier users
<br>
[Oikolab](https://docs.oikolab.com/) for providing processed global historical climate reanalysis weather data via REST API
<br>
[PirateWeather](https://pirateweather.net/) for providing processed satellite historical weather data via REST API
<br>
