import React, { useContext } from 'react';
import WrngAdvy from './WrngAdvy.js';
import { tempChange, pcpnChange, presChange, windChange } from '../utils/UnitConversion.js';
import { UnitToggleContext } from '../context/UnitToggleContext.js';
import Spinner from 'react-bootstrap/Spinner';
import '../main.css';

function Current(props) {
  const {data: {current}} = props;
  console.log(current)
  if (typeof current == 'object')
    console.log("Is Object of JSON")
  else if (Array.isArray(current))
    console.log("Is Array")

  const { unit } = useContext(UnitToggleContext);

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
            <div className="col-sm warning" style = {{backgroundColor: "rgb(214, 214, 209)", height: "750px"}}>
              <div style = {{marginTop: '30px', height:'500px', marginLeft: '10px'}}>
                <h3>Warning and Advisory</h3>
                  <WrngAdvy current={current}/>
              </div>
            </div>
            {current && current.map(current => (
            <div className="col-sm" style = {{backgroundColor: "rgb(194, 194, 189)", height: "750px", backgroundImage: "url(" + current.img +")"}}>
              <ul className="list-group">
                <li className="list-group-item border-0" style = {{marginTop: "350px", height: "50px", backgroundColor: "transparent"}}>
                  <div className = "row">
                    <div className = "col-3 no-gutters display-6" style = {{fontSize: "35px", height: "50px", width: "50px"}}>
                      {tempChange(current.temp, unit)}
                    <span>
                      {unit === true ? '\u00a0°F' : '\u00a0°C'}
                    </span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item border-0" style = {{marginTop: "20px", height: "20px", backgroundColor: "transparent"}}>
                  Condition: {current.cond}
                </li>
                <li className="list-group-item border-0" style = {{marginTop: "20px", height: "20px", backgroundColor: "transparent"}}>
                  Date: {current.date}
                </li>
                <li className="list-group-item border-0" style = {{marginTop: "20px", height: "20px", backgroundColor: "transparent"}}>
                  Time: {current.time}
                </li>
              </ul>
            </div>
            ))}
            {current && current.map(current => (
            <div className="col-sm" style = {{backgroundColor: "rgb(201, 201, 195)", height: "750px"}}>
              <div className="row"  style = {{marginTop: "250px"}}>
                <div className = "col-sm-4 offset-1 mb-5" style = {{height: "30px"}}>Cloudiness: {current.cloud}%</div>
                <div className = "col-sm-4 offset-1 mb-5" style = {{height: "30px"}}>UVI: {current.uvi}</div> 
              </div>  
              <div className="row">
                <div className = "col-sm-4 offset-1 mb-5" style = {{height: "30px"}}>Humidity: {current.humd}%</div>
                <div className = "col-sm-4 offset-1 mb-5" style = {{height: "30px"}}>Precipitation: {pcpnChange(current.rain, unit)}
                <span>
                  {unit === true ? '\u00a0in.' : '\u00a0mm'}
                </span>
                </div>
              </div>  
              <div className="row">
                <div className = "col-sm-4 offset-1 mb-5" style = {{height: "30px"}}>Air pressure: {presChange(current.p, unit)}
                <span>
                  {unit === true ? '\u00a0psi' : '\u00a0hPa'}
                </span>
                </div>
                <div className = "col-sm-4 offset-1 mb-5" style = {{height: "30px"}}>Wind-speed: {windChange(current.ws, unit)}
                <span>
                  {unit === true ? '\u00a0miles/h' : '\u00a0metres/s'}
                </span>
                </div>
              </div>
            </div>
            ))}
            </div>
          </div>
        </div>
      </div>
      )
  };
  
  export default Current;