import React from 'react';
import './main.css';
import 'bootstrap/dist/css/bootstrap.css';
  
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'



class Current extends React.Component {
  state = {
    loading:true,
    weather: [],
    picture: '',
    rain: '',
    uvi: '',
    temp: '',
    humidity: ''
  };

  async componentDidMount() {
    const response = await fetch('http://localhost:5000/getDisplays/');
    const data = await response.json();
    console.log([data])
    this.setState(
                  {weather:data.current,
                   picture: data.current[0].img,
                   rain: data.current[0].rain,
                   uvi: data.current[0].uvi,
                   temp: data.current[0].temp,
                   humidity: data.current[0].humd,
                   loading:false,
                   metrics:false,
                   tempMetric:<div>&#8451;</div>,
                   wsMetric:'m/s',
                   rainMetric:'mm'
                  }
                 );
  }

  uviHeader(){
    if(this.state.uvi <= 2)
      return <div dangerouslySetInnerHTML ={{__html: 'UVI: '+"&#x1F7E2;"}} />
    else if((this.state.uvi >= 3) && (this.state.uvi <= 5))
      return <div dangerouslySetInnerHTML ={{__html: 'UVI: '+"&#128993;"}} />
    else if((this.state.uvi >= 6) && (this.state.uvi <= 7))
      return <div dangerouslySetInnerHTML ={{__html: 'UVI: '+"&#128992;"}} />
    else if((this.state.uvi >= 8) && (this.state.uvi <= 10))
      return <div dangerouslySetInnerHTML ={{__html: 'UVI: '+"&#128308;"}} />
    else
      return <div dangerouslySetInnerHTML ={{__html: 'UVI: '+"&#128995;"}} />
  }

  uviContent(){
    if(this.state.uvi <= 2)
      return <div dangerouslySetInnerHTML ={{__html: 'Description:'+"</br>"+"Low risk of skin burn and unlikely"+"</br>"+"Minimal danger for the average person"+"</br>"+"Cautionary measures:"+'</br>'+"Apply sunscreen"}} />
    else if((this.state.uvi >= 3) && (this.state.uvi <= 5))
      return <div dangerouslySetInnerHTML ={{__html: 'Description:'+"</br>"+"Low risk of skin burn but possible"+"</br>"+"Exposure for 20 mins may lead to skin burns"+"</br>"+"Cautionary measures:"+"</br>"+"Apply broad spectrum sunscreen with SPF30"+"</br>"+'Wear hats and sunglasses'+"</br>"+'Wear long sleeved shirts when outdoors'}} />
    else if((this.state.uvi >= 6) && (this.state.uvi <= 7))
      return <div dangerouslySetInnerHTML ={{__html: 'Description:'+"</br>"+"Moderate risk of skin burn"+"</br>"+"Exposure for 20 mins may lead to skin burns"+"</br>"+"Cautionary measures:"+"</br>"+"Apply broad spectrum sunscreen with SPF30"+"</br>"+"Use lip balm or lip cream containing sunscreen"+"</br>"+'Wear hats and sunglasses'+"</br>"+'Wear long sleeved shirts when outdoors'}} />
    else if((this.state.uvi >= 8) && (this.state.uvi <= 10))
      return <div dangerouslySetInnerHTML ={{__html: 'Description:'+"</br>"+"High risk of skin burn"+"</br>"+"Exposure for 10 mins may lead to skin burns"+"</br>"+"Cautionary measures:"+"</br>"+"Apply broad spectrum sunscreen with SPF30"+"</br>"+"Use lip balm or lip cream containing sunscreen"+"</br>"+'Wear hats and sunglasses'+"</br>"+'Wear long sleeved shirts when outdoors'+"</br>"+"Seek shade and avoid being in the sun as much as possible"}} />
    else
      return <div dangerouslySetInnerHTML ={{__html: 'Description:'+"</br>"+"Very high risk of skin burn"+"</br>"+"Exposure for 5 mins may lead to skin burns"+"</br>"+"Occupational outdoor workers are at high risk"+"</br>"+"Cautionary measures:"+"</br>"+"Apply broad spectrum sunscreen with SPF30"+"</br>"+"Use lip balm or lip cream containing sunscreen"+"</br>"+'Wear hats and sunglasses'+"</br>"+'Wear long sleeved shirts when outdoors'+"</br>"+"Seek shade and avoid being in the sun as much as possible"}} />
  }

  mozzyHeader(){
    if((this.state.temp >= 30) && (this.state.humidity >= 42)){
      return <div dangerouslySetInnerHTML ={{__html: 'Mosquito Activity: '+"&#128993;"}} />
    }
    else
    return <div dangerouslySetInnerHTML ={{__html: 'Mosquito Activity: '+"&#128994;"}} />
  }

  mozzyContent(){
    if((this.state.temp >= 30) && (this.state.humidity >= 42)){
      return <div dangerouslySetInnerHTML ={{__html: 'Description:'+"</br>"+"Mosquitoes are active"+"</br>"+"Cautionary measures:"+'</br>'+"Wear light-colored clothing"+'</br>'+"Equip yourself with mosquito repellents"}} />
    }
    else
    return <div dangerouslySetInnerHTML ={{__html: 'Description:'+"</br>"+"Mosquitoes are less active"}} />
  }

  rainHeader(){
    if((this.state.rain >= 7.5) && (this.state.rain < 15))
      return <div dangerouslySetInnerHTML ={{__html: 'Flash Flood: '+"&#128993;"}} />
    else if((this.state.rain >= 15) && (this.state.rain < 30))
      return <div dangerouslySetInnerHTML ={{__html: 'Flash Flood: '+"&#128992;"}} />
    else if (this.state.rain >= 30)
    return <div dangerouslySetInnerHTML ={{__html: 'Flash Flood: '+"&#128308;"}} />
  }

  rainContent(){
    if((this.state.rain >= 7.5) && (this.state.rain < 15))
      return <div dangerouslySetInnerHTML ={{__html: 'Description:'+"</br>"+"Low risk of flooding in low lying locations and river channels"+"</br>"+"Cautionary measures:"+'</br>'+"Stay indoors"}} />
    else if((this.state.rain >= 15) && (this.state.rain < 30))
      return <div dangerouslySetInnerHTML ={{__html: 'Description:'+"</br>"+"Moderate risk of flooding in low lying locations and river channels"+"</br>"+"Cautionary measures:"+'</br>'+"Stay indoors"+'</br>'+"Avoid commuting"+'</br>'+"Move to higher grounds"}} />
    else if (this.state.rain >= 30)
    return <div dangerouslySetInnerHTML ={{__html: 'Description:'+"</br>"+"High risk of flooding in low lying locations and river channels"+"</br>"+"Cautionary measures:"+'</br>'+"Stay indoors"+'</br>'+"Avoid commuting"+'</br>'+"Move to higher grounds"+'</br>'+"Be on the alert for evacuation procedures"}} />
  }

  renderFlood (){
    if(this.state.rain > 7)
      return {display:'block'}
    else
      return {display: 'none'}
  }

  wbgtHeader(){
    if(this.state.temp < 18)
      return <div dangerouslySetInnerHTML ={{__html: 'Heat Stress: '+"&#x1F7E2;"}} />
    else if((this.state.temp >= 18) && (this.state.temp < 23))
      return <div dangerouslySetInnerHTML ={{__html: 'Heat Stress: '+"&#128993;"}} />
    else if((this.state.temp >= 23) && (this.state.temp < 28))
      return <div dangerouslySetInnerHTML ={{__html: 'Heat Stress: '+"&#128308;"}} />
    else 
      return <div dangerouslySetInnerHTML ={{__html: 'Heat Stress: '+"&#128995;"}} />
  }

  wbgtContent(){
    if(this.state.temp < 18)
      return <div dangerouslySetInnerHTML ={{__html: 'Description:'+"</br>"+"Low risk of heat injury but possible "+"</br>"+"Cautionary measures:"+'</br>'+"Hydrate yourself every 45 minutes"+'</br>'+"Seek shade and rest for at least 15 minutes"}} />
    else if((this.state.temp >= 18) && (this.state.temp < 23))
      return <div dangerouslySetInnerHTML ={{__html: 'Description:'+"</br>"+"Moderate risk of heat injury"+"</br>"+"Cautionary measures:"+'</br>'+"Hydrate yourself every 30 minutes"+'</br>'+"Seek shade and rest for at least 15 minutes"}} />
    else if((this.state.temp >= 23) && (this.state.temp < 28))
      return <div dangerouslySetInnerHTML ={{__html: 'Description:'+"</br>"+"High risk of heat injury"+"</br>"+"Cautionary measures:"+'</br>'+"Hydrate yourself every 30 minutes"+'</br>'+"Seek shade and rest for at least 30 minutes"}} />
    else 
      return <div dangerouslySetInnerHTML ={{__html: 'Description:'+"</br>"+"Very high risk of heat injury"+"</br>"+"Cautionary measures:"+'</br>'+"Hydrate yourself every 15 minutes"+'</br>'+"Seek shade and rest for at least 30 minutes"}} />
  }

  changelo = () => {
    if(this.state.metrics == false){
      this.setState({metrics: this.state.metrics = true});
      this.setState({tempMetric: this.state.tempMetric = <div>&#8457;</div>});
      this.setState({wsMetric: this.state.wsMetric = 'km/h'});
      this.setState({rainMetric: this.state.rainMetric = 'inch'});
      let itemList = this.state.weather.slice();
      itemList[0]['temp'] = Math.round((itemList[0]['temp'] * 9/5) + 32)
      itemList[0]['ws'] = Math.round(itemList[0]['ws'] * 3.6)
      itemList[0]['rain'] = Math.round(itemList[0]['rain'] / 25.4)
      this.setState({weather: itemList});
    }
    else{
      this.setState({metrics: this.state.metrics = false});
      this.setState({tempMetric: this.state.tempMetric = <div>&#8451;</div>});
      this.setState({wsMetric: this.state.wsMetric = 'm/s'});
      this.setState({rainMetric: this.state.rainMetric = 'mm'});
      let itemList = this.state.weather.slice();
      itemList[0]['temp'] = Math.round((itemList[0]['temp'] -32) * 5/9)
      itemList[0]['ws'] = Math.round(itemList[0]['ws'] / 3.6)
      itemList[0]['rain'] = Math.round(itemList[0]['rain'] * 25.4)
      this.setState({weather: itemList});
    }
  };

  render() {
    
    return(
      <div className="tab-content" id="pills-tabContent">
      <div className="tab-pane fade show active" id="pills-current" role="tabpanel" aria-labelledby="pills-current-tab">
        <div className = "container mt-3">
          <div className="row">
            <div className="col-sm warning" style = {{backgroundColor: "rgb(214, 214, 209)", height: "750px;"}}>
              <div style = {{marginTop: '20px', height:'50px', marginLeft: '20px'}}>
                <h3>Warning and Advisory</h3>
                <BootstrapSwitchButton id="change-temp" onlabel="Fahrenheit" offlabel="Celsius" onstyle="warning" offstyle="success" width={150} onChange={this.changelo}/>
                <Accordion defaultActiveKey="0">
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle eventKey="0">
                        {this.uviHeader()}
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                      {this.uviContent()}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card style = {this.renderFlood()}>
                    <Card.Header>
                      <Accordion.Toggle eventKey="1">
                        {this.rainHeader()}
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        {this.rainContent()}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle eventKey="2">
                        {this.mozzyHeader()}
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                      {this.mozzyContent()}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle eventKey="3">
                        {this.wbgtHeader()}
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>
                        {this.wbgtContent()}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
            <div className="col-sm" style = {{backgroundColor: "rgb(194, 194, 189)", height: "750px", backgroundImage: `url(${this.state.picture})`}}>
            {this.state.weather.map(person => (
              <ul className="list-group">
                <li className="list-group-item border-0" style = {{marginTop: "350px", height: "50px", backgroundColor: "transparent"}}>
                  <div className = "row">
                    <div className= "col-3 no-gutters display-6" id = 'console-event' style = {{height:"48px", width: "50px"}}>
                    <div style = {{display:'flex', fontSize:'41px'}}>{person.temp}{this.state.tempMetric}</div>
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
                  <td>Precipitation: {person.rain}{this.state.rainMetric}</td>
                </tr>
                <tr style = {{marginBottom : '100px'}}>
                  <td>Air pressure: {person.p}hPA</td>
                  <td>Wind-speed: {person.ws}{this.state.wsMetric}</td>
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