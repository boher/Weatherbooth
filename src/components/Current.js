import React from 'react';
import { Spinner } from "react-bootstrap";
import '../main.css';

function Current(props) {
  const {data: {current}} = props;
  console.log(current)
  if (typeof current == 'object')
    console.log("Is Object of JSON")
  else if (Array.isArray(current))
    console.log("Is Array")

  if (current == null) {
    
    return (
      <div className="container mt-3 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden"></span>
        </Spinner>
      </div>
    )
  };

    return(
      <div className="tab-content" id="pills-tabContent">
      <div className="tab-pane fade show active" id="pills-current" role="tabpanel" aria-labelledby="pills-current-tab">
        <div className = "container mt-3">
          <div className="row">
            <div className="col-sm warning" style = {{backgroundColor: "rgb(214, 214, 209)", height: "750px;"}}>
              <div style = {{marginTop: '20px', height:'50px', marginLeft: '20px'}}>
                <h3>Warning and Advisory</h3>
                  {/*TOIMPORT:import WrngAdvy from './WrngAdvy.js'<WrngAdvy />*/}
              </div>
            </div>
            {current && current.map(current => (
            <div className="col-sm" style = {{backgroundColor: "rgb(194, 194, 189)", height: "750px", backgroundImage: "url(" + current.img +")"}}>
              <ul className="list-group">
                <li className="list-group-item border-0" style = {{marginTop: "350px", height: "50px", backgroundColor: "transparent"}}>
                  <div className = "row">
                    <div className= "col-3 no-gutters display-6" id = 'console-event' style = {{height:"48px", width: "50px"}}>
                    <p>Temp: {current.temp}</p>
                    </div>
                    <div className= "col no-gutters display-6" id = 'icon'></div>
                  </div>
                </li>
                <li className="list-group-item border-0" style = {{marginTop: "20px", height: "20px", backgroundColor: "transparent"}}>
                    <p>Condition: {current.cond}</p>
                </li>
                <li className="list-group-item border-0" style = {{marginTop: "20px", height: "20px", backgroundColor: "transparent"}}>
                    <p>Date: {current.date}</p>
                </li>
                <li className="list-group-item border-0" style = {{marginTop: "20px", height: "20px", backgroundColor: "transparent"}}>
                    <p>Time: {current.time}</p>
                </li>
              </ul>
            </div>
            ))}
            <div className="col-sm" style = {{backgroundColor: "rgb(201, 201, 195)", height: "750px"}}>
            {current && current.map(current => (
              <table style={{width:'100%', marginTop: '250px'}}>
                <tr>
                  <td>Cloudy: {current.cloud}%</td>
                  <td>UVI: {current.uvi}</td> 
                </tr>
                <tr>
                  <td>Humidity: {current.humd}%</td>
                  <td>Precipitation: {current.rain}mm</td>
                </tr>
                <tr style = {{marginBottom : '100px'}}>
                  <td>Air pressure: {current.p}hPA</td>
                  <td>Wind-speed: {current.ws}m/s</td>
                </tr>
              </table>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
      )
  };
  
  export default Current;