import React from 'react';
import WrngAdvy from './WrngAdvy.js'
import Spinner from 'react-bootstrap/Spinner';
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
                <WrngAdvy current={current}/>
            </div>
          </div>
          {current && current.map(current => (
          <div className="col-sm" style = {{backgroundColor: "rgb(194, 194, 189)", height: "750px", backgroundImage: "url(" + current.img +")"}}>
            <ul className="list-group">
              <li className="list-group-item border-0" style = {{marginTop: "350px", height: "50px", backgroundColor: "transparent"}}>
                <div className = "row">
                  <div className= "col-3" id = 'console-event' style = {{height:"48px", width: "50px"}}>
                    Temp: {current.temp}
                  </div>
                  <div className= "col" id = 'icon'></div>
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
              <div className = "col-sm-4 offset-1 mb-5" style = {{height: "30px"}}>Precipitation: {current.rain}mm</div>
            </div>  
            <div className="row">
              <div className = "col-sm-4 offset-1 mb-5" style = {{height: "30px"}}>Air pressure: {current.p}hPA</div>
              <div className = "col-sm-4 offset-1 mb-5" style = {{height: "30px"}}>Wind-speed: {current.ws}m/s</div>
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