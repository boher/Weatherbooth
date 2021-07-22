import React from 'react';
import { Accordion, Card, Spinner } from "react-bootstrap";
import '../main.css';

function SevenDays(props) {
  const {data: {sevenDay}} = props;
  console.log(sevenDay)
  if (typeof sevenDay == 'object')
    console.log("Is Object of JSON")
  else if (Array.isArray(sevenDay))
    console.log("Is Array")

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
    <div className="container mt-3">
      <div className="table-responsive">
        <table className="table">
          <tbody>
            {sevenDay && sevenDay.map(day => (
              <Accordion key={day.day} /*activeKey={day} onSelect={(e) => setActive(e)}*/>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Card.Header} eventKey={day.day}>
                      <table cellSpacing='10px'>
                        <tr>
                          <td align="left">{day.day}</td>
                          <td align="left">{day.date}</td>
                          <td align="left">{day.cond_overall}</td>
                          <td align="left">
                            <img src={'/'+ day.cond_img} alt={day.cond_img}/>
                          </td>
                          <td align="left">{day.min_temp}</td>
                          <td align="left">{day.max_temp}</td>
                        </tr>
                      </table>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={day.day}>
                    <Card.Body>
                      <table>
                        <tr>
                          {/* Start of column 1 */}            
                          <td>
                            <table>
                              <p align="center">Morning</p>
                              <div align="center">
                                <img src={'/'+ day.morn_img} alt={day.morn_img}/>
                              </div>
                              <tr>
                                <td>Temperature</td>
                                <td>{day.morn_temp}</td>
                              </tr>
                              <tr>
                                <td>Cloudiness</td>
                                <td>{day.morn_cloud}</td>
                              </tr>
                              <tr>
                                <td>Precipitation</td>
                                <td>{day.morn_prcp}</td>
                              </tr>
                              <tr>
                                <td>Humidity</td>
                                <td>{day.morn_humd}</td>
                              </tr>
                            </table>
                          </td>
                          {/* Start of column 2 */}  
                          <td>
                            <table >
                              <p align="center">Afternoon</p>
                              <div align="center">
                                <img src={'/'+ day.noon_img} alt={day.noon_img}/>
                              </div>
                              <tr>
                                <td>Temperature</td>
                                <td>{day.noon_temp}</td>
                              </tr>
                              <tr>
                                <td>Cloudiness</td>
                                <td>{day.noon_cloud}</td>
                              </tr>
                              <tr>
                                <td>Precipitation</td>
                                <td>{day.noon_prcp}</td>
                              </tr>
                              <tr>
                                <td>Humidity</td>
                                <td>{day.noon_humd}</td>
                              </tr>
                            </table>
                          </td>
                          {/* Start of column 3 */}  
                          <td>
                            <table >
                              <p align="center">Evening</p>
                              <div align="center">
                                <img src={'/'+ day.eve_img} alt={day.eve_img}/>
                              </div>
                              <tr>
                                <td>Temperature</td>
                                <td>{day.eve_temp}</td>
                              </tr>
                              <tr>
                                <td>Cloudiness</td>
                                <td>{day.eve_cloud}</td>
                              </tr>
                              <tr>
                                <td>Precipitation</td>
                                <td>{day.eve_prcp}</td>
                              </tr>
                              <tr>
                                <td>Humidity</td>
                                <td>{day.eve_humd}</td>
                              </tr>
                            </table>
                          </td>
                          {/* Start of column 4 */}  
                          <td>
                            <table>
                              <p align="center" >Midnight</p>
                              <div align="center">
                                <img src={'/'+ day.mid_img} alt={day.mid_img}/>
                              </div>
                              <tr>
                                <td>Temperature</td>
                                <td>{day.mid_temp}</td>
                              </tr>
                              <tr>
                                <td>Cloudiness</td>
                                <td>{day.mid_cloud}</td>
                              </tr>
                              <tr>
                                <td>Precipitation</td>
                                <td>{day.mid_prcp}</td>
                              </tr>
                              <tr>
                                <td>Humidity</td>
                                <td>{day.mid_humd}</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default SevenDays;