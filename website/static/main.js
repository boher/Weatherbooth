var elms = document.querySelectorAll("#console-event");
var icon = document.querySelectorAll("#icon");  
var rainID = document.querySelectorAll("#rainID");
var rainV = document.querySelectorAll('#rainValue');
var presID = document.querySelectorAll("#pID");
var presV = document.querySelectorAll("#pValue");
var wsID = document.querySelectorAll("#wsID");
var wsV = document.querySelectorAll("#wsValue");

  for (var i = 0; i < icon.length; i++) {
    icon[i].innerHTML = "<span>&#8451;</span>";
  }

  for (var i = 0; i < rainID.length; i++) {
    rainID[i].innerHTML = "mm";
  }

  for (var i = 0; i < presID.length; i++) {
    presID[i].innerHTML = "hPa";
  }

  for (var i = 0; i < wsID.length; i++) {
    wsID[i].innerHTML = "m/s";
  }
  
  $(function() {
    $('#change-units').change(function() {
      if ($(this).prop('checked') == true) {
        for (var i = 0; i < elms.length; i++) {
          var temp = elms[i].innerHTML;
          var toImperial = Math.round((temp * 9/5) + 32);
          elms[i].innerHTML = toImperial;
        }
        for (var i = 0; i < icon.length; i++) {
          icon[i].innerHTML = "<span>&#8457;</span>";
        }
        for (var i = 0; i < rainID.length; i++) {
          rainID[i].innerHTML = "in.";
        }
        for (var i = 0; i < rainV.length; i++) {
          var pcpn = rainV[i].innerHTML;
          var toImperial = pcpn/25.4;
          rainV[i].innerHTML = toImperial.toFixed(4);
        }
        for (var i = 0; i < presV.length; i++) {
          var pres = presV[i].innerHTML;
          var toImperial = pres*0.01450377;
          presV[i].innerHTML = toImperial.toFixed(2);
        }
        for (var i = 0; i < presID.length; i++) {
          presID[i].innerHTML = "psi";
        }
        for (var i = 0; i < wsV.length; i++) {
          var wind = wsV[i].innerHTML;
          var toImperial = wind/2.237;
          wsV[i].innerHTML = toImperial.toFixed(2);
        }
        for (var i = 0; i < wsID.length; i++) {
          wsID[i].innerHTML = "miles/h";
        }
        for (var i = 0; i < tfHourTemp.length; i++) {
          tfHourTemp[i] = Math.round((tfHourTemp[i] * 9/5) + 32);
        }
        for (var i = 0; i < tfHourPcpn.length; i++) {
          toImperial = tfHourPcpn[i]/25.4;
          tfHourPcpn[i] = toImperial.toFixed(4);
        }
        for (var i = 0; i < tfHourWind.length; i++) {
          toImperialMetric = tfHourWind[i]/2.237;
          tfHourWind[i] = toImperialMetric.toFixed(2);
        }
        for (var i = 0; i < tfHourPres.length; i++) {
          toImperialMetric = tfHourPres[i]*0.01450377;
          tfHourPres[i] = toImperialMetric.toFixed(2);
        }

        tempLabel = "Temp °F";
        pcpnLabel = 'Volume in.';
        presLabel = 'Air Pressure psi';
        windLabel = 'Speed miles/h';
        lineAreaChart(tempChart, tfHourTemp, tempLabel);
        lineAreaChart(pcpnChart, tfHourPcpn, pcpnLabel);
        lineAreaChart(presChart, tfHourPres, presLabel);
        lineAreaChart(windChart, tfHourWind, windLabel);

      } else if ($(this).prop('checked') == false) {
        for (var i = 0; i < elms.length; i++) {
          var toMetric = elms[i].innerHTML;
          var temp = Math.round((toMetric - 32) * 5/9);
          elms[i].innerHTML = temp;
        }
        for (var i = 0; i < icon.length; i++) {
          icon[i].innerHTML = "<span>&#8451;</span>";
        }
        for (var i = 0; i < rainID.length; i++) {
          rainID[i].innerHTML = "mm";
        }
        for (var i = 0; i < rainV.length; i++) {
          var pcpn = rainV[i].innerHTML;
          var toMetric = pcpn*25.4;
          rainV[i].innerHTML = toMetric.toFixed(2);
        }
        for (var i = 0; i < presV.length; i++) {
          var pres = presV[i].innerHTML;
          var toMetric = pres/0.01450377;
          presV[i].innerHTML = toMetric.toFixed(0);
        } 
        for (var i = 0; i < presID.length; i++) {
          presID[i].innerHTML = "hPa";
        }
        for (var i = 0; i < wsV.length; i++) {
          var wind = wsV[i].innerHTML;
          var toMetric = wind*2.237;
          wsV[i].innerHTML = toMetric.toFixed(2);
        } 
        for (var i = 0; i < wsID.length; i++) {
          wsID[i].innerHTML = "m/s";
        }
        for (var i = 0; i < tfHourTemp.length; i++) {
          tfHourTemp[i] = Math.round((tfHourTemp[i] - 32) * 5/9);
        }
        for (var i = 0; i < tfHourPcpn.length; i++) {
          toMetric = tfHourPcpn[i]*25.4;
          tfHourPcpn[i] = toMetric.toFixed(2);
        }
        for (var i = 0; i < tfHourWind.length; i++) {
          toMetric = tfHourWind[i]*2.237;
          tfHourWind[i] = toMetric.toFixed(2);
        }
        for (var i = 0; i < tfHourPres.length; i++) {
          toMetric = tfHourPres[i]/0.01450377;
          tfHourPres[i] = toMetric.toFixed(0);
        }

        tempLabel = "Temp °C";
        pcpnLabel = 'Volume mm';
        presLabel = 'Air Pressure hPa';
        windLabel = 'Speed m/h';
        lineAreaChart(tempChart, tfHourTemp, tempLabel);
        lineAreaChart(pcpnChart, tfHourPcpn, pcpnLabel);
        lineAreaChart(presChart, tfHourPres, presLabel);
        lineAreaChart(windChart, tfHourWind, windLabel);

      }
    });
  })