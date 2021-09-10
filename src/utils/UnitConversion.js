// Imperial values conversion
/* Temperature */
export const tempChange = (temp, unit) => {
  return unit ?
      toFahrenheit(temp) :
      temp;
};

const toFahrenheit = celsius => {
  return Math.round((celsius * 9 / 5) + 32);
};

/* Precipitation */
export const pcpnChange = (pcpn, unit) => {
  return unit ?
      toInches(pcpn) :
      pcpn;
};

const toInches = millimetres => {
  return (millimetres / 25.4).toFixed(4);
};

/* Air Pressure */
export const presChange = (pres, unit) => {
  return unit ?
      toPSI(pres) :
      pres;
};

const toPSI = hectopascal => {
  return (hectopascal * 0.01450377).toFixed(2);
};

/* Wind Speed */
export const windChange = (wind, unit) => {
  return unit ?
      toMilesPh(wind) :
      wind;
};

const toMilesPh = metresPh => {
  return (metresPh * 2.237).toFixed(2);
};

/* Twenty four hour tab */
export const tfHourConvert = (tfHour, attr) => {
  let toImperial = [];
  tfHour.forEach((tf) => { 
    if (attr === "temp")
      toImperial.unshift(toFahrenheit(tf));
    else if (attr === "pcpn")
      toImperial.unshift(toInches(tf));
    else if (attr === "pres")
      toImperial.unshift(toPSI(tf));
    else if (attr === "wind")
      toImperial.unshift(toMilesPh(tf));
  });

  return toImperial;
};

/* Update Chart */
export const updateChart = (chart, labelTxt, attrValues) => {
  chart.current.chartInstance.data.datasets.forEach((dataset) => {
        dataset.data = attrValues;
    });
  chart.current.chartInstance.data.datasets[0].label = labelTxt;
  chart.current.chartInstance.update({
    preservation: true,
  });
};