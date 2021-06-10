from flask import Blueprint, redirect, url_for, render_template, request, session, flash
from datetime import datetime
import time
from website.current import startRun, getCurrent, getImg

def getSevenDay():
    day = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
    date = ['2021-06-06', '2021-06-07', '2021-06-08', '2021-06-09', '2021-06-10', '2021-06-11', '2021-06-12'] 
    cond = ['Rain', 'Drizzle', 'Clear', 'Rain', 'Clouds', 'Drizzle', 'Clouds']
    icon = ['10d','09d','01d','10d','02d','09d','02d']
    tempMin = [27, 27, 26, 27, 26, 27, 27]
    tempMax = [30, 30, 30, 30, 30,29, 29]
    humdMin = [65, 71, 59, 60, 63, 62, 70]
    humdMax = [68, 75, 65, 62, 66, 70, 77]
    prcpVolMin =  [0.62, 0.55, 0.10, 0.78, 0.99, 0.44, 0.75]
    prcpVolMax = [0.75, 0.70, 0.50, 0.90, 1, 0.70, 0.85]
    airPreMin = [1009, 1010, 1010, 1010, 1010, 1008, 1008]
    airPreMax = [1011, 1015, 1015, 1015, 1016, 1010, 1011]
    avgWSMin = [4.69, 5.25, 4.74, 4.15, 5.32, 4.35, 3.77]
    avgWSMax = [5, 6, 5, 5.5, 6.5, 5.75, 4.25]
    cloudMin = [77, 94, 99, 92, 82, 84, 80]
    cloudMax = [80, 95, 100, 100, 99, 94, 100]

    return day, date, cond, icon, tempMin, tempMax, humdMin, humdMax, prcpVolMin, prcpVolMax, airPreMin, airPreMax, avgWSMax, avgWSMin, cloudMin, cloudMax