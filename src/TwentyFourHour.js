import React from 'react';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import './main.css';

const TwentyFourHour = props => {
  return (
    <Jumbotron fluid>
      <Container>
        <h2 className="display-4" style={{textAlign: "center"}}>UNDER CONSTRUCTION, PLEASE STAND BY</h2>
        <p className ="lead p-4" style={{textAlign: "center"}}>Thank you for your patience :) ... 24 hour</p>
      </Container>
    </Jumbotron>
  );
}

export default TwentyFourHour;