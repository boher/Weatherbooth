import React from 'react';
import { Accordion, Card, Spinner } from "react-bootstrap";
import '../main.css';

class SevenDays extends React.Component {

  constructor() {
    super();
    this.state = {

      // sevenDay consist of a list of dictionaries
      sevenDay: '',
      loading: true
    };
  }

  async componentDidMount() {

    try {

      let response = await fetch('http://localhost:5000/getDisplay/');
      let data = await response.json(); 

      if (!response.ok) {
        throw Error(response.statusText);
      }

      // data.sevenDay will result in a list of dictionaries
      this.setState({ loading: false, sevenDay: data.sevenDay })
      /*
      this.setState({ loading:false, 
        sevenDay: [
        { day: "day", date: "date", cond_overall: "cond_overall", cond_img: "cond_img",
          min_temp: "min_temp", max_temp: "max_temp",
          morn_img: "morn_img", morn_temp: "morn_temp", morn_humd: "morn_humd", 
          morn_cloud: "morn_cloud", morn_prcp: "morn_prcp", 
          noon_img: "noon_img", noon_temp: "noon_temp", noon_humd: "noon_humd", 
          noon_cloud: "noon_cloud", noon_prcp: "noon_prcp", 
          eve_img: "eve_img", eve_temp: "eve_temp", eve_humd: "eve_humd", 
          eve_cloud: "eve_cloud", eve_prcp: "eve_cloud",
          mid_img: "mid_img", mid_temp: "mid_temp", mid_humd: "mid_humd", 
          mid_cloud: "mid_cloud", mid_prcp: "mid_prcp"},
        { day: "day", date: "date", cond_overall: "cond_overall", cond_img: "cond_img",
          min_temp: "min_temp", max_temp: "max_temp",
          morn_img: "morn_img", morn_temp: "morn_temp", morn_humd: "morn_humd", 
          morn_cloud: "morn_cloud", morn_prcp: "morn_prcp", 
          noon_img: "noon_img", noon_temp: "noon_temp", noon_humd: "noon_humd", 
          noon_cloud: "noon_cloud", noon_prcp: "noon_prcp", 
          eve_img: "eve_img", eve_temp: "eve_temp", eve_humd: "eve_humd", 
          eve_cloud: "eve_cloud", eve_prcp: "eve_cloud",
          mid_img: "mid_img", mid_temp: "mid_temp", mid_humd: "mid_humd", 
          mid_cloud: "mid_cloud", mid_prcp: "mid_prcp"},
      ]})
      */

    } catch(error) {
      console.log(error);
    }
  }
    
  render() {

    if (this.state.loading) {
      
      return (
        <div className="container mt-3 text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden"></span>
          </Spinner>
        </div>
      )
    }

    return(
      <div className="container mt-3">
        <div className="table-responsive">
          <table className="table">
            <tbody>
              {this.state.sevenDay.map(day => (
                <Accordion key={day.day} defaultActiveKey={this.state.sevenDay[0].day}>
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
  }
}

export default SevenDays;