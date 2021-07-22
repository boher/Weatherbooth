import React from 'react';
import { Accordion, Card } from "react-bootstrap";
import '../main.css';

function WrngAdvy(props) {

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

    return(
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
      )
  };
  
  export default WrngAdvy;