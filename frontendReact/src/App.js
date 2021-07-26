import React, { useEffect, useState } from 'react';
import { MemoryRouter, Route, Switch, Link } from 'react-router-dom';
import { createBrowserHistory, createMemoryHistory } from 'history';
import axios from 'axios';

import Form from './Component/Form';
import Current from './Component/Current';
import TwentyFourHour from './Component/TwentyFourHour';
import SevenDays from './Component/SevenDays';

import './main.css';

import Nav from 'react-bootstrap/Nav';
import Spinner from 'react-bootstrap/Spinner';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import Navbar from 'react-bootstrap/Navbar';

function App() {

  const [getDisplay, setDisplay] = useState({weather: []});

  const fetchWeather = async () => {
    try {
      const {data} = await axios.get('/api');
      setDisplay(data);
    } catch(error) { /* Maybe can intercept 4xx OR 5xx Requests b4 being handled via axios.interceptors.request */
      console.error(error.response.data);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const data = getDisplay;

  if (getDisplay == null) {
    return (
      <div className="container mt-3 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden"></span>
        </Spinner>
      </div>
    )
  };

  return (
    <React.Fragment>
      <MemoryRouter history={createMemoryHistory()}>
        <div className="App">
          {/* Top Navigation Bar */}
          <Navbar expand="lg" style={{backgroundColor: "#8fcbf7"}}>
            <a className="navbar-app-name mr-sm-4" style={{textDecoration: "none"}} href="/#">
              <img className="d-inline-block" src={'./images/weatherbooth.png'} width="60" height="60" alt="" />
              Weatherbooth
            </a>
            <Navbar.Toggle aria-controls="navbarCollapse"/>
            <Navbar.Collapse id="navbarCollapse">
              <Nav.Link className="mx-auto h1" disabled href="#"><h2>Singapore</h2></Nav.Link>  
              <BootstrapSwitchButton id="change-temp" onlabel="Fahrenheit" offlabel="Celsius" onstyle="warning" offstyle="success" width={150} />
            </Navbar.Collapse>
          </Navbar>
          {/* Form */}
          <Form data="Hello World"/>
          {/* Content */}
          <Switch>
            <Route exact path='/' render={props => <Current data={data} {...props} /> } />
            <Route path='/TwentyFourHour' render={props => <TwentyFourHour data={data} {...props} /> } />
            <Route path='/SevenDays' render={props => <SevenDays data={data} {...props} /> } />
            {/* TODO: Refresh browser stays on same component & refetch Flask backend data for said component only, */}
            {/* may need to create an empty temp Route path, if route matches & */}
            {/* refresh detected to router.push to empty temp path followed by router.replace target route & Flask backend data*/}
            {/* stackoverflow.com/questions/47602091/how-to-use-react-router-4-0-to-refresh-current-route-not-reload-the-whole-page */}
          </Switch>
          {/* Bottom Navigation Bar */}
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
};

export default App;