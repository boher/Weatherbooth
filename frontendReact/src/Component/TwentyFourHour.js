import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureLow, faCloudRain, faLongArrowAltDown, faWind, faCloud } from '@fortawesome/free-solid-svg-icons';
import { faSafari } from "@fortawesome/free-brands-svg-icons";
// import { Line } from 'react-chartjs-2';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import '../main.css';

function TwentyFourHour(props) {
  const {data: {tfHour}} = props;
  console.log(tfHour)
  if (typeof tfHour == 'object')
    console.log("Is Object of JSON")
  else if (Array.isArray(tfHour))
    console.log("Is Array")

  if (tfHour == null) {
    
    return (
      <div>Not Implemented yet</div>
      /*
      <div className="container mt-3 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden"></span>
        </Spinner>
      </div>
      */
    )
  };

  return(
    <div className="container mt-3 border">
      <div className= "row">
        <div className = "col">
          <p style = {{margin: "0"}}>24-Hour Forecast</p><p id = "attribute">Temperature</p>
        </div>
        <div className = "col-expand-sm d-flex justify-content-end">
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link active data-toggle="tab" href="#temp" /*onClick={() => setAttr(temp)}*/><Button variant="dark"><FontAwesomeIcon icon={faTemperatureLow} /></Button></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link data-toggle="tab" href="#prec" /*onClick={() => setAttr(prec)}*/><Button variant="dark"><FontAwesomeIcon icon={faCloudRain} /></Button></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link data-toggle="tab" href="#humd" /*onClick={() => setAttr(humd)}*/><Button variant="dark"><FontAwesomeIcon icon={faSafari} /></Button></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link data-toggle="tab" href="#press" /*onClick={() => setAttr(press)}*/><Button variant="dark"><FontAwesomeIcon icon={faLongArrowAltDown} /></Button></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link data-toggle="tab" href="#wind" /*onClick={() => setAttr(wind)}*/><Button variant="dark"><FontAwesomeIcon icon={faWind} /></Button></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link data-toggle="tab" href="#cloud" /*onClick={() => setAttr(cloud)}*/><Button variant="dark"><FontAwesomeIcon icon={faCloud} /></Button></Nav.Link>
          </Nav.Item>
        </Nav>
        </div>
      </div>
      <div className="tab-content charts">
      <div className = "col-sm-4 offset-1 mb-5" style = {{height: "30px"}}>
          <ul>
            {tfHour && tfHour.map(tf => (
            <li>
              {tf.t}
            </li>
          ))}
          </ul>
          <ul>
            {tfHour && tfHour.map(tf => (
            <li>
              {tf.h}
            </li>
          ))}
          </ul>
          <ul>
            {tfHour && tfHour.map(tf => (
            <li>
              {tf.pe}
            </li>
          ))}
          </ul>
          <ul>
            {tfHour && tfHour.map(tf => (
            <li>
              {tf.a}
            </li>
          ))}
          </ul>
          <ul>
            {tfHour && tfHour.map(tf => (
            <li>
              {tf.w}
            </li>
          ))}
          </ul>
          <ul>
            {tfHour && tfHour.map(tf => (
            <li>
              {tf.c}
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
    )
};

export default TwentyFourHour;