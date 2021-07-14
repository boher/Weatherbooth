import React, { useEffect, useState } from 'react';
import { MemoryRouter, Route, Switch, Link, withRouter } from 'react-router-dom';
import { createBrowserHistory, createMemoryHistory } from 'history'
import Current from './Current.js'
import TwentyFourHour from './TwentyFourHour.js'
import SevenDays from './SevenDays.js'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import axios from 'axios';
import logo from './images/weatherbooth.png'
import './main.css';
{/* If using OOP Class, however beware can't use Effect nor State Hooks -> class App extends React.Component */}
function App() {

  useEffect(() => {
    axios.get('https://weatherbooth.herokuapp.com/').then(response => {
      console.log("SUCCESS", response);
      this.setState(response);
    }).catch(error => {
      console.log(error);
    })

  }, [])
      return (
      <React.Fragment>
      <MemoryRouter history={createMemoryHistory()}>
        <div className="App">
          <Navbar expand="lg" style={{backgroundColor: "#8fcbf7"}}>
            <a className="navbar-app-name mr-sm-4" style={{textDecoration: "none"}}>
              <img className="d-inline-block" src={logo} width="60" height="60" alt="" />
              Weatherbooth
            </a>
              <Navbar.Toggle aria-controls="navbarCollapse" />
              <Navbar.Collapse id="navbarCollapse">
              <Nav.Link className="mx-auto h1" disabled href="#"><h2>Singapore</h2></Nav.Link>  
                  <BootstrapSwitchButton id="change-temp" onlabel="Fahrenheit" offlabel="Celsius" onstyle="warning" offstyle="success" width={150} />
              </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path='/' component={withRouter(Current)} />
          <Route path='/TwentyFourHour' component={withRouter(TwentyFourHour)} />
          <Route path='/SevenDays' component={withRouter(SevenDays)} />
          {/* TODO: Refresh browser stays on same component & refetch Flask backend data for said component only, */}
          {/* may need to create an empty temp Route path, if route matches & */}
          {/* refresh detected to router.push to empty temp path followed by router.replace target route & Flask backend data*/}
          {/* stackoverflow.com/questions/47602091/how-to-use-react-router-4-0-to-refresh-current-route-not-reload-the-whole-page */}
        </Switch>
        <Nav className="fixed-bottom bg-light" justify variant="pills" defaultActiveKey="pills-current">
          <Nav.Item>
            <Nav.Link as={Link} exact to="/" eventKey="pills-current">Current</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} exact to="/TwentyFourHour" eventKey="pills-24hour">24-Hour</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} exact to="/SevenDays" eventKey="pills-7days">7-Day</Nav.Link>
          </Nav.Item>
        </Nav>
        </div>
      </MemoryRouter>
      </React.Fragment>
      )

}

export default App;