import React from 'react';
import { Accordion, Card } from "react-bootstrap";
import '../main.css';

function WrngAdvy(current) {
  console.log("WrngAdvy passed props, destructured in Current.js", current)
  if (typeof current == 'object')
    console.log("Is Object of JSON")
  else if (Array.isArray(current))
    console.log("Is Array")
  let { current: [
          {
            humd: humdValue, 
            rain: rainValue, 
            temp: tempValue, 
            uvi: uviValue
          }
        ]
      } = current;
  console.log("WrngAdvy UVI", uviValue);
  console.log("WrngAdvy Temp", tempValue);
  console.log("WrngAdvy Humd", humdValue);
  console.log("WrngAdvy Rain", rainValue);

  function uviHeader() {
    if(uviValue < 3)
      return <div dangerouslySetInnerHTML ={{__html: `UVI: &#x1F7E2;`}} />
    else if((uviValue >= 3) && (uviValue < 5))
      return <div dangerouslySetInnerHTML ={{__html: `UVI: &#128993;`}} />
    else if((uviValue >= 5) && (uviValue < 8))
      return <div dangerouslySetInnerHTML ={{__html: `UVI: &#128992;`}} />
    else if((uviValue >= 8) && (uviValue <= 10))
      return <div dangerouslySetInnerHTML ={{__html: `UVI: &#128308;`}} />
    else
      return <div dangerouslySetInnerHTML ={{__html: `UVI: &#128995;`}} />
  }

  function uviContent() {
    if(uviValue < 3)
      return <div dangerouslySetInnerHTML ={{__html: `Description: </br> Low risk of skin burn and unlikely </br> Minimal danger for the average person 
        </br> Cautionary measures: </br> Apply sunscreen`}} />
    else if((uviValue >= 3) && (uviValue <= 5))
      return <div dangerouslySetInnerHTML ={{__html: `Description: </br> Low risk of skin burn but possible </br> Exposure for 20 mins may lead to skin burns 
        </br> Cautionary measures: </br> Apply broad spectrum sunscreen with SPF30 </br> Wear hats and sunglasses </br> Wear long sleeved shirts when outdoors`}} />
    else if((uviValue >= 5) && (uviValue <= 8
      ))
      return <div dangerouslySetInnerHTML ={{__html: `Description: </br> Moderate risk of skin burn </br> Exposure for 20 mins may lead to skin burns 
        </br> Cautionary measures: </br> Apply broad spectrum sunscreen with SPF30 </br> Use lip balm or lip cream containing sunscreen 
        </br> Wear hats and sunglasses </br> Wear long sleeved shirts when outdoors`}} />
    else if((uviValue >= 8) && (uviValue <= 10))
      return <div dangerouslySetInnerHTML ={{__html: `Description: </br> High risk of skin burn </br> Exposure for 10 mins may lead to skin burns 
        </br> Cautionary measures: </br> Apply broad spectrum sunscreen with SPF30 </br> Use lip balm or lip cream containing sunscreen 
        </br> Wear hats and sunglasses </br> Wear long sleeved shirts when outdoors </br> Seek shade and avoid being in the sun as much as possible`}} />
    else
      return <div dangerouslySetInnerHTML ={{__html: `Description: </br> Very high risk of skin burn </br> Exposure for 5 mins may lead to skin burns 
        </br> Occupational outdoor workers are at high risk </br> Cautionary measures: </br> Apply broad spectrum sunscreen with SPF30 
        </br> Use lip balm or lip cream containing sunscreen </br> Wear hats and sunglasses </br> Wear long sleeved shirts when outdoors 
        </br> Seek shade and avoid being in the sun as much as possible`}} />
  }

  function mozzyHeader() {
    if((tempValue >= 30) && (humdValue >= 42)){
      return <div dangerouslySetInnerHTML ={{__html: `Mosquito Activity: &#128993;`}} />
    }
    else
    return <div dangerouslySetInnerHTML ={{__html: `Mosquito Activity: &#128994;`}} />
  }

  function wbgtHeader() {
    if(tempValue < 18)
      return <div dangerouslySetInnerHTML ={{__html: `Heat Stress: &#x1F7E2;`}} />
    else if((tempValue >= 18) && (tempValue < 23))
      return <div dangerouslySetInnerHTML ={{__html: `Heat Stress: &#128993;`}} />
    else if((tempValue >= 23) && (tempValue < 28))
      return <div dangerouslySetInnerHTML ={{__html: `Heat Stress: &#128308;`}} />
    else 
      return <div dangerouslySetInnerHTML ={{__html: `Heat Stress: &#128995;`}} />
  }

  function wbgtContent() {
    if(tempValue < 18)
      return <div dangerouslySetInnerHTML ={{__html: `Description: </br> Low risk of heat injury but possible  </br> Cautionary measures: 
        </br> Hydrate yourself every 45 minutes </br> Seek shade and rest for at least 15 minutes`}} />
    else if((tempValue >= 18) && (tempValue < 23))
      return <div dangerouslySetInnerHTML ={{__html: `Description: </br> Moderate risk of heat injury </br> Cautionary measures: 
        </br> Hydrate yourself every 30 minutes </br> Seek shade and rest for at least 15 minutes`}} />
    else if((tempValue >= 23) && (tempValue < 28))
      return <div dangerouslySetInnerHTML ={{__html: `Description: </br> High risk of heat injury </br> Cautionary measures: 
        </br> Hydrate yourself every 30 minutes </br> Seek shade and rest for at least 30 minutes`}} />
    else 
      return <div dangerouslySetInnerHTML ={{__html: `Description: </br> Very high risk of heat injury </br> Cautionary measures: 
        </br> Hydrate yourself every 15 minutes </br> Seek shade and rest for at least 30 minutes`}} />
  }

  function mozzyContent() {
    if((tempValue >= 30) && (humdValue >= 42)){
      return <div dangerouslySetInnerHTML ={{__html: `Description: </br> Mosquitoes are active </br> Cautionary measures: 
        </br> Wear light-coloured clothing </br> Equip yourself with mosquito repellents`}} />
    }
    else
    return <div dangerouslySetInnerHTML ={{__html: `Description: </br> Mosquitoes are less active`}} />
  }

  function rainHeader() {
    if((rainValue >= 7.5) && (rainValue < 15))
      return <div dangerouslySetInnerHTML ={{__html: `Flash Flood: &#128993;`}} />
    else if((rainValue >= 15) && (rainValue < 30))
      return <div dangerouslySetInnerHTML ={{__html: `Flash Flood: &#128992;`}} />
    else if (rainValue >= 30)
    return <div dangerouslySetInnerHTML ={{__html: `Flash Flood: &#128308;`}} />
  }

  function rainContent() {
    if((rainValue >= 7.5) && (rainValue < 15))
      return <div dangerouslySetInnerHTML ={{__html: `Description: </br> Low risk of flooding in low lying locations and river channels </br> Cautionary measures: 
        </br> Stay indoors`}} />
    else if((rainValue >= 15) && (rainValue < 30))
      return <div dangerouslySetInnerHTML ={{__html: `Description: </br> Moderate risk of flooding in low lying locations and river channels </br> Cautionary measures: 
        </br> Stay indoors </br> Avoid commuting </br> Move to higher grounds`}} />
    else if (rainValue >= 30)
    return <div dangerouslySetInnerHTML ={{__html: `Description: </br> High risk of flooding in low lying locations and river channels </br> Cautionary measures: 
      </br> Stay indoors </br> Avoid commuting </br> Move to higher grounds </br> Be on the alert for evacuation procedures`}} />
  }

  function renderFlood () {
    if(rainValue > 7)
      return {display:'block'}
    else
      return {display: 'none'}
  }

    return(
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle eventKey="0">
            {uviHeader()}
          <Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
            {uviContent()}
            </Card.Body>
          </Accordion.Collapse>
          </Card.Header>
          </Accordion.Toggle>
        </Card>
        <Card>
          <Accordion.Toggle eventKey="3">
            {wbgtHeader()}
          <Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              {wbgtContent()}
            </Card.Body>
          </Accordion.Collapse>
          </Card.Header>
          </Accordion.Toggle>
        </Card>
        <Card>
          <Accordion.Toggle eventKey="2">
            {mozzyHeader()}
          <Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
            {mozzyContent()}
            </Card.Body>
          </Accordion.Collapse>
          </Card.Header>
          </Accordion.Toggle>
        </Card>
        <Card style = {renderFlood()}>
          <Accordion.Toggle eventKey="1">
            {rainHeader()}
          <Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              {rainContent()}
            </Card.Body>
          </Accordion.Collapse>
          </Card.Header>
          </Accordion.Toggle>
        </Card>
      </Accordion>
      )
  };
  
  export default WrngAdvy;