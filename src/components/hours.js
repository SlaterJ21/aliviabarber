import React, { Component } from 'react';
import '../css/hours.css';
import {Row, Col, Table} from 'react-materialize';

class Hours extends Component {
  render() {

    let availability = [
      ['Monday', 'Closed'],
      ['Tuesday', '10AM–5PM'],
      ['Wednesday', '10AM–5PM'],
      ['Thursday', 'Closed'],
      ['Friday', '10AM–5PM'],
      ['Saturday', '10AM–2PM'],
      ['Sunday', 'Closed']
    ]

    let today = new Date()
    let dayOfWeek = today.getDay() - 1


    const availabilityMap = () => {
      return availability.map((day, i) => {
        if (dayOfWeek === -1 && i === 0) {
          return (
            <tr className="current-day">
              <td>{day[0]}</td>
              <td>{day[1]}</td>
            </tr>
          )
        } else if (dayOfWeek === i) {
          return (
            <tr className="current-day">
              <td>{day[0]}</td>
              <td>{day[1]}</td>
            </tr>
          )
        } else {
          return (
            <tr>
            <td>{day[0]}</td>
            <td>{day[1]}</td>
            </tr>
          )
        }
      })
    }

    return (
      <Row id="hours">
        <Col s={1} m={3} l={4}></Col>
        <Col s={10} m={6} l={4}>
        <h4 className="center-align">Hours</h4>
        <p className="center-align info">*Our hours are subject to change*</p>
          <Table centered>
            <thead>
              <tr>
                <th data-field="day">Day</th>
                <th data-field="availability">Availability</th>
              </tr>
            </thead>
            <tbody>
              {availabilityMap()}
            </tbody>
          </Table>
          <Row className="page-break align-center"></Row>
        </Col>
      </Row>
    )
  }
}

export default Hours
