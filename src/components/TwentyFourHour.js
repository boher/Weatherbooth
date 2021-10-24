import React, { useContext, useState, useEffect, useMemo } from 'react';
import { tfHourConvert, updateChart } from '../utils/UnitConversion.js';
import { UnitToggleContext } from '../context/UnitToggleContext.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureLow, faCloudRain, faLongArrowAltDown, faWind, faCloud } from '@fortawesome/free-solid-svg-icons';
import { faSafari } from "@fortawesome/free-brands-svg-icons";
import { Line, Bar } from 'react-chartjs-2';
import { Nav, Button, Spinner } from 'react-bootstrap';
import '../main.css';

function TwentyFourHour(props) {
  const {data: {tfHour}} = props;
  console.log(tfHour)
  if (typeof tfHour == 'object')
    console.log("Is Object of JSON")
  else if (Array.isArray(tfHour))
    console.log("Is Array")

  const [chartData, setChartData] = useState({});
  const [attr, setAttr] = useState("Temperature");
  const [active, setActive] = useState("temp");

  const { unit } = useContext(UnitToggleContext);

  function createChart(attr, hour, values) {
    setChartData({
      labels: hour,
      datasets: [
        {
          label: attr,
          data: values,
          backgroundColor: '#ff9811',
          fill: true,
          borderWidth: 1
        }
      ]
    });

    console.log(attr, values, hour);
  };

  /* Rerender createChart() according to: 
     1. HTML nav-link active onclick eventKey aka tf.attr = "THE 4 ATTR STRINGS"
     2. Toggle switch change of React Context true OR false
     3. Conditionally render OUTSIDE of onClick anon function, somehow detecting that
     4. Crtieria from Step 1 & executing desired createChart() as such
     5. RMB createChart() NEEDS tfHour data to be mapped OR looped */
  const onClickRender = useMemo(() => {
    tfHour.forEach(function(tf) {
      if (unit === true) {
        switch(attr) {
          case "temp": return createChart("Temp °F", tf.hour, tfHourConvert(tf.values, tf.attr));
          break;
          case "pcpn": return createChart("Volume in.", tf.hour, tfHourConvert(tf.values, tf.attr));
          break;
          case "pres": return createChart("Air Pressure psi", tf.hour, tfHourConvert(tf.values, tf.attr));
          break;
          case "wind": return createChart("Speed miles/h", tf.hour, tfHourConvert(tf.values, tf.attr));
          break;
        }
      }
      else {
        switch(attr) {
          case "temp": createChart("Temp °C", tf.hour, tf.values);
          break;
          case "pcpn": createChart("Volume mm", tf.hour, tf.values);
          break;
          case "pres": createChart("Air Pressure hPa", tf.hour, tf.values);
          break;
          case "wind": createChart("Speed m/s", tf.hour, tf.values);
          break;
        }
      }
    })
  }, [attr]);

  const attrString = useMemo(() => {
    if (attr === "pcpn")
      return "Precipitation"
    else if (attr === "humd")
      return "Humidity"
    else if (attr === "pres")
      return "Air Pressure"
    else if (attr === "wind")
      return "Wind Speed"
    else if (attr === "cloud")
      return "Cloud Cover"
    else
      return "Temperature"
  }, [attr]);

  useEffect(() => {
    if (tfHour) {
      let attr = {};
      let hour = {};
      let values = {};
        
      tfHour.forEach(function(tf) {
        attr = tf.attr;
        hour = tf.hour;
        values = tf.values;
        createChart(attr, hour, values);
      })
    }
  }, [tfHour]);

  if (tfHour == null) {
    
    return (
      <div className="container mt-3 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden"></span>
        </Spinner>
      </div>
    )
  };

  return(
    <div className="container mt-3 border">
      <div className= "row">
        <div className = "col">
          <p style = {{margin: "0"}}>24-Hour Forecast</p>
          <p>{attrString}</p>
        </div>
        <div className = "col-expand-sm d-flex justify-content-end">
        <Nav variant="tabs" activeKey={active} onSelect={(selectedKey) => setActive(selectedKey)}>
          <Nav.Item>
            {tfHour && tfHour.map((tf) => (
            tf.attr === "temp" ? <Nav.Link data-toggle="tab" eventKey="temp" onClick={() => {unit === true ? createChart("Temp °F", tf.hour, tfHourConvert(tf.values, tf.attr)) : createChart("Temp °C", tf.hour, tf.values); setAttr(tf.attr);}}><Button variant="dark"><FontAwesomeIcon icon={faTemperatureLow} /></Button></Nav.Link>
            : ''))}
          </Nav.Item>
          <Nav.Item>
            {tfHour && tfHour.map((tf) => (
            tf.attr === "pcpn" ? <Nav.Link data-toggle="tab" eventKey="pcpn" onClick={() => {unit === true ? createChart("Volume in.", tf.hour, tfHourConvert(tf.values, tf.attr)) : createChart("Volume mm", tf.hour, tf.values); setAttr(tf.attr);}}><Button variant="dark"><FontAwesomeIcon icon={faCloudRain} /></Button></Nav.Link>
          : ''))}
          </Nav.Item>
          <Nav.Item>
            {tfHour && tfHour.map((tf) => (
            tf.attr === "humd" ? <Nav.Link data-toggle="tab" eventKey="humd" onClick={() => {createChart("Humidity %", tf.hour, tf.values); setAttr(tf.attr);}}><Button variant="dark"><FontAwesomeIcon icon={faSafari} /></Button></Nav.Link>
          : ''))}
          </Nav.Item>
          <Nav.Item>
            {tfHour && tfHour.map((tf) => (
            tf.attr === "pres" ? <Nav.Link data-toggle="tab" eventKey="pres" onClick={() => {unit === true ? createChart("Air Pressure psi", tf.hour, tfHourConvert(tf.values, tf.attr)) : createChart("Air Pressure hPa", tf.hour, tf.values); setAttr(tf.attr);}}><Button variant="dark"><FontAwesomeIcon icon={faLongArrowAltDown} /></Button></Nav.Link>
          : ''))}
          </Nav.Item>
          <Nav.Item>
            {tfHour && tfHour.map((tf) => (
            tf.attr === "wind" ? <Nav.Link data-toggle="tab" eventKey="wind" onClick={() => {unit === true ? createChart("Speed miles/h", tf.hour, tfHourConvert(tf.values, tf.attr)) : createChart("Speed m/s", tf.hour, tf.values); setAttr(tf.attr);}}><Button variant="dark"><FontAwesomeIcon icon={faWind} /></Button></Nav.Link>
          : ''))}
          </Nav.Item>
          <Nav.Item>
            {tfHour && tfHour.map((tf) => (
            tf.attr === "cloud" ? <Nav.Link data-toggle="tab" eventKey="cloud" onClick={() => {createChart("Cloudiness %", tf.hour, tf.values); setAttr(tf.attr);}}><Button variant="dark"><FontAwesomeIcon icon={faCloud} /></Button></Nav.Link>
          : ''))}
          </Nav.Item>
        </Nav>
        </div>
      </div>
      <div className="charts">
        <Line
          data={chartData}
          options={{
            scales: {
              y: {
                  beginAtZero: true
              }
            },
            plugins: {
              tooltip: {
                mode: 'index',
                intersect: false
              }
            },
            hover: {
              mode: 'index',
              intersect: false
            }
          }}
        />
      </div>
    </div>
    )
};

export default TwentyFourHour;