import React from 'react';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import './main.css';

class TwentyFourHour extends React.Component {
  constructor() {
    super();
    this.state = {
        dateTime: ''
    }
  }

  async testBackend() {
    let response = await fetch('http://localhost:5000/getDisplays/', { dateTime: 'include' });
    let data = await response.text(); // for string
    return data;
  }

  componentDidMount() {
      this.testBackend().then((data) => {
          this.setState({ dateTime: data })
        })
        .catch(error=>{
          console.log(error)
        })
    }

  render() {
  return(
    <Jumbotron fluid>
      <Container>
        <h2 className="display-4" style={{textAlign: "center"}}>UNDER CONSTRUCTION, PLEASE STAND BY</h2>
        <p className ="lead p-4" style={{textAlign: "center"}}>Thank you for your patience :) ... 24 hour</p>
        <div className = "col-sm-4 offset-1 mb-5" style = {{height: "30px"}}>
          {this.state.dateTime}
        </div>
      </Container>
    </Jumbotron>
    )
  }
}

export default TwentyFourHour;