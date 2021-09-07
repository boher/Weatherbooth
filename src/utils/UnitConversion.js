// Imperial values conversion
/* Temperature */
export const tempChange = (temp, unit) => {
  return unit ?
      toFahrenheit(temp) :
      temp;
};
/* Twenty four hour tab */
export const tfHourTempChange = (tfHourTemp) => {
  return tfHourTemp.forEach((tf) => { toFahrenheit(tf) });
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
/* Twenty four hour tab */
export const tfHourPcpnChange = (tfHourPcpn) => {
  return tfHourPcpn.forEach((tf) => { toInches(tf) });
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
/* Twenty four hour tab */
export const tfHourPresChange = (tfHourPres) => {
  return tfHourPres.forEach((tf) => { toPSI(tf) });
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
/* Twenty four hour tab */
export const tfHourWindChange = (tfHourWind) => {
  return tfHourWind.forEach((tf) => { toMilesPh(tf) });
};

const toMilesPh = metresPh => {
  return (metresPh * 2.237).toFixed(2);
};

/* Update Chart */
export const updateChart = (chart, labelTxt, attrValues) => {
  chart.data.datasets.forEach((dataset) => {
        dataset.data = attrValues;
    });
  chart.data.datasets[0].label = labelTxt;
  chart.update();
};