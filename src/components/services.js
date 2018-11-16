import React, { Component } from 'react';
import {Row, Col, Table} from 'react-materialize';

class Services extends Component {
  render() {
    return (
      <Row id="services">
        <Col s={1} m={2} l={4}></Col>
        <Col s={10} m={8} l={4}>
        <h4 className="center-align">Services</h4>
        <p className="center-align info">With over 30 years experience you can expect the best!</p>
          <Table>
            <thead>
              <tr>
                <th data-field="id">Type</th>
                <th data-field="price">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mens Haircut</td>
                <td>$22</td>
              </tr>
              <tr>
                <td>Womens Haircut</td>
                <td>$25</td>
              </tr>
              <tr>
                <td>Childrens Haircut</td>
                <td>$20</td>
              </tr>
            </tbody>
          </Table>
          <Row className="page-break align-center"></Row>
        </Col>
      </Row>
    )
  }
}

export default Services
