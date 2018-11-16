import React, { Component } from 'react';
import '../css/contact.css';
import {Row, Col, CardPanel} from 'react-materialize';

class Contact extends Component {
  render() {
    return (
      <Row id="contact">
        <Col s={1} m={3} l={4}></Col>
        <Col s={10} m={6} l={4}>
          <h4 className="center-align">Contact</h4>
          <p className="center-align info">*Walk-ins welcome, with availability*</p>
          <p className="center-align info">*Call-In appointments prefered.*</p>
          <CardPanel className="lighten-4 white-text center-align">
            <h6><a href="tel: (303) 652-9088">(303) 652-9088</a></h6>
          </CardPanel>
          <Row className="page-break align-center"></Row>
        </Col>
      </Row>
    )
  }
}

export default Contact;
