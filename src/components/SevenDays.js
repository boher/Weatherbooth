import React, { useContext, useState } from 'react';
import { tempChange, pcpnChange } from '../utils/UnitConversion.js';
import { UnitToggleContext } from '../context/UnitToggleContext.js';
import { Accordion, Card, Spinner, Table } from 'react-bootstrap';
import '../main.css';

function SevenDays(props) {
  const {data: {sevenDay}} = props;
  console.log(sevenDay)
  if (typeof sevenDay == 'object')
    console.log("Is Object of JSON")
  else if (Array.isArray(sevenDay))
    console.log("Is Array")

  const [activeCard, setActiveCard] = useState();

  const { unit } = useContext(UnitToggleContext);

  function toggleActive(active) {
    if (activeCard === active) {
      setActiveCard(null);
    } else {
      setActiveCard(active);
    }
  }

  if (sevenDay == null) {
    
    return (
      <div className="container mt-3 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden"></span>
        </Spinner>
      </div>
    )
  };

  return(
    <Table responsive="lg" className="container mt-3">
      <tbody>
        {sevenDay && sevenDay.map(day => (
          <Accordion defaultActiveKey={activeCard}>
            <Card key={day.day}>
              <Card.Header onClick={() => toggleActive(day.day)} className={activeCard === day.day ? "active" : null}>
                <Accordion.Toggle as={Card.Header} eventKey={day.day}>
                  <Table borderless className="container mx-1">
                    <tr>
                      <td>{day.date}</td>
                      <td>{day.day}</td>
                      {/*<td>{day.cond_overall}</td>*/}
                      <td>
                        <img src={day.cond_img} alt={day.cond_img}/>
                      </td>
                      <td>{tempChange(day.min_temp, unit)}</td>
                      <td>{tempChange(day.max_temp, unit)}</td>
                      <td>
                        {unit === true ? '\u00a0°F' : '\u00a0°C'}
                      </td>
                    </tr>
                  </Table>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={day.day}>
                <Card.Body>
                  <Table className="container mx-1">
                    <tr>
                      {/* Start of column 1 */}            
                      <td>
                        <Table className="container mr-5">
                          <p align="center" >Midnight</p>
                          <div align="center">
                            <img src={day.mid_img} alt={day.mid_img}/>
                          </div>
                          <tr>
                            <td>Temperature</td>
                            <td>
                              {tempChange(day.mid_temp, unit)}
                              {unit === true ? '\u00a0\u00a0°F' : '\u00a0\u00a0°C'}
                            </td>
                          </tr>
                          <tr>
                            <td>Cloudiness</td>
                            <td>{day.mid_cloud}</td>
                          </tr>
                          <tr>
                            <td>Precipitation</td>
                            <td>
                              {pcpnChange(day.mid_prcp, unit)}
                              {unit === true ? '\u00a0\u00a0in.' : '\u00a0\u00a0mm'}
                            </td>
                          </tr>
                          <tr>
                            <td>Humidity</td>
                            <td>{day.mid_humd}</td>
                          </tr>
                        </Table>
                      </td>
                      {/* Start of column 2 */}  
                      <td>
                        <Table className="container mr-5">
                          <p align="center">Morning</p>
                          <div align="center">
                            <img src={day.morn_img} alt={day.morn_img}/>
                          </div>
                          <tr>
                            <td>Temperature</td>
                            <td>
                              {tempChange(day.morn_temp, unit)}
                              {unit === true ? '\u00a0\u00a0°F' : '\u00a0\u00a0°C'}
                            </td>
                          </tr>
                          <tr>
                            <td>Cloudiness</td>
                            <td>{day.morn_cloud}</td>
                          </tr>
                          <tr>
                            <td>Precipitation</td>
                            <td>
                              {pcpnChange(day.morn_prcp, unit)}
                              {unit === true ? '\u00a0\u00a0in.' : '\u00a0\u00a0mm'}
                            </td>
                          </tr>
                          <tr>
                            <td>Humidity</td>
                            <td>{day.morn_humd}</td>
                          </tr>
                        </Table>
                      </td>
                      {/* Start of column 3 */}  
                      <td>
                        <Table className="container mr-5">
                          <p align="center">Afternoon</p>
                          <div align="center">
                            <img src={day.noon_img} alt={day.noon_img}/>
                          </div>
                          <tr>
                            <td>Temperature</td>
                            <td>
                              {tempChange(day.noon_temp, unit)}
                              {unit === true ? '\u00a0\u00a0°F' : '\u00a0\u00a0°C'}
                            </td>
                          </tr>
                          <tr>
                            <td>Cloudiness</td>
                            <td>{day.noon_cloud}</td>
                          </tr>
                          <tr>
                            <td>Precipitation</td>
                            <td>
                              {pcpnChange(day.noon_prcp, unit)}
                              {unit === true ? '\u00a0\u00a0in.' : '\u00a0\u00a0mm'}
                            </td>
                          </tr>
                          <tr>
                            <td>Humidity</td>
                            <td>{day.noon_humd}</td>
                          </tr>
                        </Table>
                      </td>
                      {/* Start of column 4 */}  
                      <td>
                        <Table className="container mr-5">
                          <p align="center">Evening</p>
                          <div align="center">
                            <img src={day.eve_img} alt={day.eve_img}/>
                          </div>
                          <tr>
                            <td>Temperature</td>
                            <td>
                              {tempChange(day.eve_temp, unit)}
                              {unit === true ? '\u00a0\u00a0°F' : '\u00a0\u00a0°C'}
                            </td>
                          </tr>
                          <tr>
                            <td>Cloudiness</td>
                            <td>{day.eve_cloud}</td>
                          </tr>
                          <tr>
                            <td>Precipitation</td>
                            <td>
                              {pcpnChange(day.eve_prcp, unit)}
                              {unit === true ? '\u00a0\u00a0in.' : '\u00a0\u00a0mm'}
                            </td>
                          </tr>
                          <tr>
                            <td>Humidity</td>
                            <td>{day.eve_humd}</td>
                          </tr>
                        </Table>
                      </td>
                    </tr>
                  </Table>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ))}
      </tbody>
    </Table>
  )
};

export default SevenDays;