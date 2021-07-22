import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureLow, faCloudRain, faLongArrowAltDown, faWind, faCloud } from '@fortawesome/free-solid-svg-icons'
import { faSafari } from "@fortawesome/free-brands-svg-icons"
import { Line } from 'react-chartjs-2'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import axios from 'axios';
import '../main.css';

class TwentyFourHour extends React.Component {
  constructor() {
    super();
    this.state = {
        isLoaded: false,
        tfHour: ''
    }
  }

  componentDidMount() {
      fetch('http://localhost:5000/getDisplay/').then(response => response.json()
        .then((result) => {
          this.setState({
            isLoaded: true,
            tfHour: result.tfHour
          });
          console.log(result)
        })
        .catch(error=>{
          console.log(error)
        })
      )
    }

  render() {
    const {isLoaded, tfHour} = this.state;
    if (!isLoaded) {
      return <h2>LOADING...</h2>;
    } else {
    return(
      <div className="container mt-3 border">
        <div className= "row">
          <div className = "col">
            <p style = {{margin: "0"}}>24-Hour Forecast</p><p id = "attribute">Temperature</p>
          </div>
          <div className = "col-expand-sm d-flex justify-content-end">
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link active data-toggle="tab" href="#temp" /*onClick={() => setAttr(!temp)}*/><Button variant="dark"><FontAwesomeIcon icon={faTemperatureLow} /></Button></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link data-toggle="tab" href="#prec" /*onClick={() => setAttr(!prec)}*/><Button variant="dark"><FontAwesomeIcon icon={faCloudRain} /></Button></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link data-toggle="tab" href="#humd" /*onClick={() => setAttr(!humd)}*/><Button variant="dark"><FontAwesomeIcon icon={faSafari} /></Button></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link data-toggle="tab" href="#press" /*onClick={() => setAttr(!press)}*/><Button variant="dark"><FontAwesomeIcon icon={faLongArrowAltDown} /></Button></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link data-toggle="tab" href="#wind" /*onClick={() => setAttr(!wind)}*/><Button variant="dark"><FontAwesomeIcon icon={faWind} /></Button></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link data-toggle="tab" href="#cloud" /*onClick={() => setAttr(!cloud)}*/><Button variant="dark"><FontAwesomeIcon icon={faCloud} /></Button></Nav.Link>
            </Nav.Item>
          </Nav>
          </div>
        </div>
        <div className="tab-content charts">
        <div className = "col-sm-4 offset-1 mb-5" style = {{height: "30px"}}>
            <ul>
              {Object.keys(tfHour["t"]).map(hr => (
              <li>
                {hr}
              </li>
            ))}
            </ul>
            <ul>
              {Object.keys(tfHour["h"]).map(hr => (
              <li>
                {hr}
              </li>
            ))}
            </ul>
            <ul>
              {Object.keys(tfHour["pe"]).map(hr => (
              <li>
                {hr}
              </li>
            ))}
            </ul>
            <ul>
              {Object.keys(tfHour["a"]).map(hr => (
              <li>
                {hr}
              </li>
            ))}
            </ul>
            <ul>
              {Object.keys(tfHour["w"]).map(hr => (
              <li>
                {hr}
              </li>
            ))}
            </ul>
            <ul>
              {Object.keys(tfHour["c"]).map(hr => (
              <li>
                {hr}
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
      );
    }
  }
}

export default TwentyFourHour;