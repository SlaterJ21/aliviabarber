import React, { Component } from 'react';
import '../css/location.css';
import {Row, Col, CardPanel} from 'react-materialize';

class Location extends Component {
  render() {
    return (
      <Row id="location">
        <Col s={1} m={2} l={4}></Col>
        <Col s={10} m={8} l={4}>
        <h4 className="center-align">Find Us</h4>
        <p className="center-align info">We are located in Niwot's Cottonwood Square, across from The Niwot Tavern at:</p>
          <CardPanel className="lighten-4 white-text center-align">
            <h6><a href="https://www.google.com/maps/place/7960+Niwot+Rd,+Niwot,+CO+80503/@40.100734,-105.167975,17z/data=!4m5!3m4!1s0x876bf08be18da449:0xcab752627329a79b!8m2!3d40.1007341!4d-105.1679749?hl=en">7960 Niwot Rd</a></h6>
            <h6><a href="https://www.google.com/maps/place/7960+Niwot+Rd,+Niwot,+CO+80503/@40.100734,-105.167975,17z/data=!4m5!3m4!1s0x876bf08be18da449:0xcab752627329a79b!8m2!3d40.1007341!4d-105.1679749?hl=en">Niwot, CO 8050</a></h6>
          </CardPanel>
          <Row className="page-break align-center"></Row>
        </Col>
      </Row>
    )
  }
}

export default Location
