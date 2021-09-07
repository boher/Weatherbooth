import React, { useEffect, useState } from 'react';
import { MemoryRouter, Route, Switch, Link } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Current from './components/Current.js';
import TwentyFourHour from './components/TwentyFourHour.js';
import SevenDays from './components/SevenDays.js';
import UnitToggle from './components/UnitToggle.js';
import { UnitToggleContext } from './context/UnitToggleContext.js';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';
import './main.css';

function App() {
  const [getDisplay, setDisplay] = useState({weather: []});
  const [unit, setUnit] = useState(false);

  const fetchWeather = async () => {
    try {
      const {data} = await axios('/getDisplay/');
      setDisplay(data);
    } catch(error) { /* Maybe can intercept 4xx OR 5xx Requests b4 being handled via axios.interceptors.request */
      console.error(error.response.data);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
  <React.Fragment>
  <MemoryRouter history={createMemoryHistory()}>
    <div className="App">
    <UnitToggleContext.Provider value={{unit, setUnit}}>
      <Navbar expand="lg" style={{backgroundColor: "#257cfd"}}>
        <a className="navbar-app-name mr-sm-4" style={{textDecoration: "none", color: "white", fontSize: "large"}}>
          <img className="d-inline-block" src={'./images/weatherbooth.png'} width="60" height="60" alt="" />
          Weatherbooth
        </a>
          <Navbar.Toggle aria-controls="navbarCollapse" />
          <Navbar.Collapse id="navbarCollapse">
          <Nav.Link className="mx-auto h1" disabled href="#"><h2>Singapore</h2></Nav.Link>
            <UnitToggle />
          </Navbar.Collapse>
      </Navbar>
        <Switch>
          <Route exact path='/' render={props => <Current data={getDisplay} {...props}/> } />
          <Route path='/TwentyFourHour' render={props => <TwentyFourHour data={getDisplay} {...props} /> } />
          <Route path='/SevenDays' render={props => <SevenDays data={getDisplay} {...props} /> } />
          {/* TODO: Refresh browser stays on same component & refetch Flask backend data for said component only, */}
          {/* may need to create an empty temp Route path, if route matches & */}
          {/* refresh detected to router.push to empty temp path followed by router.replace target route & Flask backend data*/}
          {/* stackoverflow.com/questions/47602091/how-to-use-react-router-4-0-to-refresh-current-route-not-reload-the-whole-page */}
        </Switch>
      </UnitToggleContext.Provider>
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