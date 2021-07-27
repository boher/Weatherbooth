import React, { useState, useEffect, useMemo } from 'react';
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

  const attrString = useMemo(() => {
    if (attr === "temp")
      return "Temperature"
    else if (attr === "pcpn")
      return "Precipitation"
    else if (attr === "humd")
      return "Humidity"
    else if (attr === "pres")
      return "Air Pressure"
    else if (attr === "wind")
      return "Wind Speed"
    else if (attr === "cloud")
      return "Cloudiness"
  }, [attr])

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
        <Nav variant="tabs">
          <Nav.Item>
            {tfHour && tfHour.map((tf) => (
            tf.attr === "temp" ? <Nav.Link data-toggle="tab" eventKey={"temp"} onClick={() => {createChart(tf.attr, tf.hour, tf.values); setAttr(tf.attr);}}><Button variant="dark"><FontAwesomeIcon icon={faTemperatureLow} /></Button></Nav.Link>
            : ''))}
          </Nav.Item>
          <Nav.Item>
            {tfHour && tfHour.map((tf) => (
            tf.attr === "pcpn" ? <Nav.Link data-toggle="tab" eventKey={"pcpn"} onClick={() => {createChart(tf.attr, tf.hour, tf.values); setAttr(tf.attr);}}><Button variant="dark"><FontAwesomeIcon icon={faCloudRain} /></Button></Nav.Link>
          : ''))}
          </Nav.Item>
          <Nav.Item>
            {tfHour && tfHour.map((tf) => (
            tf.attr === "humd" ? <Nav.Link data-toggle="tab" eventKey={"humd"} onClick={() => {createChart(tf.attr, tf.hour, tf.values); setAttr(tf.attr);}}><Button variant="dark"><FontAwesomeIcon icon={faSafari} /></Button></Nav.Link>
          : ''))}
          </Nav.Item>
          <Nav.Item>
            {tfHour && tfHour.map((tf) => (
            tf.attr === "pres" ? <Nav.Link data-toggle="tab" eventKey={"pres"} onClick={() => {createChart(tf.attr, tf.hour, tf.values); setAttr(tf.attr);}}><Button variant="dark"><FontAwesomeIcon icon={faLongArrowAltDown} /></Button></Nav.Link>
          : ''))}
          </Nav.Item>
          <Nav.Item>
            {tfHour && tfHour.map((tf) => (
            tf.attr === "wind" ? <Nav.Link data-toggle="tab" eventKey={"wind"} onClick={() => {createChart(tf.attr, tf.hour, tf.values); setAttr(tf.attr);}}><Button variant="dark"><FontAwesomeIcon icon={faWind} /></Button></Nav.Link>
          : ''))}
          </Nav.Item>
          <Nav.Item>
            {tfHour && tfHour.map((tf) => (
            tf.attr === "cloud" ? <Nav.Link data-toggle="tab" eventKey={"cloud"} onClick={() => {createChart(tf.attr, tf.hour, tf.values); setAttr(tf.attr);}}><Button variant="dark"><FontAwesomeIcon icon={faCloud} /></Button></Nav.Link>
          : ''))}
          </Nav.Item>
        </Nav>
        </div>
      </div>
      <div className="charts">
        <Line
          data={chartData}
          options={{
            responsive: true,
            scales: {
              y: {
                  beginAtZero: true
              }
            }
          }}
        />
      </div>
    </div>
    )
};

export default TwentyFourHour;