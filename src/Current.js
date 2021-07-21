import React from 'react';
import { Spinner} from "react-bootstrap";
import './main.css';


class Current extends React.Component {

  constructor() {
    super();
    this.state = {
      
      weather: '',
      loading: true
    };
  }

  async componentDidMount() {

    try {

      let response = await fetch('https://weatherbooth.herokuapp.com/getDisplay/');
      // let response = await fetch('http://localhost:5000/getDisplay/');
      let data = await response.json();

      if (!response.ok) {
        throw Error(response.statusText);
      }

      this.setState({loading: false, weather: data.current});

    } catch(error) {
      console.log(error);
    }
  }

  render() {  

    if (this.state.loading) {
      
      return (
        <div class="container mt-3 text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden"></span>
          </Spinner>
        </div>
      )
    }

    return(
      <div className="tab-content" id="pills-tabContent">
      <div className="tab-pane fade show active" id="pills-current" role="tabpanel" aria-labelledby="pills-current-tab">
        <div className = "container mt-3">
          <div className="row">
            <div className="col-sm warning" style = {{backgroundColor: "rgb(214, 214, 209)", height: "750px;"}}>
              <div style = {{marginTop: '20px', height:'50px', marginLeft: '20px'}}>
                <h3>Warning and Advisory</h3>
              </div>
            </div>
            <div className="col-sm" style = {{backgroundColor: "rgb(194, 194, 189)", height: "750px"}}>
            {this.state.weather.map(person => (
              <ul className="list-group">
                <li className="list-group-item border-0" style = {{marginTop: "350px", height: "50px", backgroundColor: "transparent"}}>
                  <div className = "row">
                    <div className= "col-3 no-gutters display-6" id = 'console-event' style = {{height:"48px", width: "50px"}}>
                    <p>Temp: {person.temp}</p>
                    </div>
                    <div className= "col no-gutters display-6" id = 'icon'></div>
                  </div>
                </li>
                <li className="list-group-item border-0" style = {{marginTop: "20px", height: "20px", backgroundColor: "transparent"}}>
                    <p>Condition: {person.cond}</p>
                </li>
                <li className="list-group-item border-0" style = {{marginTop: "20px", height: "20px", backgroundColor: "transparent"}}>
                    <p>Date: {person.date}</p>
                </li>
                <li className="list-group-item border-0" style = {{marginTop: "20px", height: "20px", backgroundColor: "transparent"}}>
                    <p>Time: {person.time}</p>
                </li>
              </ul>
            ))}
            </div>
            <div className="col-sm" style = {{backgroundColor: "rgb(201, 201, 195)", height: "750px"}}>
            {this.state.weather.map(person => (
              <table style={{width:'100%', marginTop: '250px'}}>
                <tr>
                  <td>Cloudy: {person.cloud}%</td>
                  <td>UVI: {person.uvi}</td> 
                </tr>
                <tr>
                  <td>Humidity: {person.humd}%</td>
                  <td>Precipitation: {person.rain}mm</td>
                </tr>
                <tr style = {{marginBottom : '100px'}}>
                  <td>Air pressure: {person.p}hPA</td>
                  <td>Wind-speed: {person.ws}m/s</td>
                </tr>
              </table>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
      )
      }
    }
    
    export default Current;