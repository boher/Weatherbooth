import React from 'react';
import './main.css';

const Current = props => {
  return (
  <div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-current" role="tabpanel" aria-labelledby="pills-current-tab">
    <div className = "container mt-3">
      <div className="row">
        <div className="col-sm warning" style = {{backgroundColor: "rgb(214, 214, 209)", height: "750px;"}}>
          <ul className="list-group">
            <li className="list-group-item" style = {{marginTop: "20px", height: "50px"}}>Warning and Advisories</li>
            <li className="list-group-item mt-3" id = 'uv'></li>
            <li className="list-group-item mt-3" id = 'wbgt'></li>
            <li className="list-group-item mt-3" id = 'mozzy'></li>
            <li className="list-group-item mt-3" id = 'rain'></li>
          </ul>
        </div>
        <div className="col-sm" style = {{backgroundColor: "rgb(194, 194, 189)", height: "750px", backgroundImage: ""}}>
          <ul className="list-group">
            <li className="list-group-item border-0" style = {{marginTop: "350px", height: "50px", backgroundColor: "transparent"}}>
              <div className = "row">
                <div className= "col-3 no-gutters display-6" id = 'console-event' style = {{height:"48px", width: "50px"}}></div>
                <div className= "col no-gutters display-6" id = 'icon'></div>
              </div>
            </li>
            <li className="list-group-item border-0" style = {{marginTop: "20px", height: "20px", backgroundColor: "transparent"}}>Condition: </li>
            <li className="list-group-item border-0" style = {{marginTop: "20px", height: "20px", backgroundColor: "transparent"}}>Date: </li>
            <li className="list-group-item border-0" style = {{marginTop: "20px", height: "20px", backgroundColor: "transparent"}}>Time: </li>
          </ul>
        </div>
        <div className="col-sm" style = {{backgroundColor: "rgb(201, 201, 195)", height: "750px;"}}>
          <div className="row"  style = {{marginTop: "250px"}}>
            <div className = "col-sm-4 offset-1 mb-5" style = {{height: "30px"}}>Temperature:&nbsp;
              <div style = {{display: "flex"}}>
                <div id = 'console-event'></div>
                <div>~</div>
                <div id = 'console-event'></div>
                <div id = 'icon'></div>
              </div>
            </div>
            <div className = "col-sm-4 offset-1 mb-5" style = {{height: "30px"}}>Ultraviolet Index: </div>
          </div>  
          <div className="row">
            <div className = "col-sm-4 offset-1 mb-5" style = {{height: "30px"}}>Humidity: ~%</div>
            <div className = "col-sm-4 offset-1 mb-5" style = {{height: "30px"}}>Precipitation: 0~mm</div>
          </div>
          <div className="row">
            <div className = "col-sm-4 offset-1 mb-5" style = {{height: "30px"}}>Air pressure: ~hPa</div>
            <div className = "col-sm-4 offset-1 mb-5" style = {{height: "30px"}}>Wind-speed: ~m/s</div>
          </div> 
          <div className="row">
            <div className = "col-sm-4 offset-1 mb-5" style = {{height: "30px"}}>Cloudiness: ~%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div> 
  );
}

export default Current;