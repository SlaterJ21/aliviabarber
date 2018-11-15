
import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
import '../css/mapview.css';

class MapView extends Component {
  render() {
    return (
      <Row className="map-view">
        <Col s={1} m={3} l={3}></Col>
        <Col s={10} m={6} l={6}>
            <iframe width="100%" height="400px" title="Niwot Barber Shop" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=40.100465637222555,-105.16790974885227 &amp;q=7960%20Niwot%20Rd%2C%20Niwot%2C%20CO%2080503+(Niwot%20Barber%20Shop)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
            <a href="https://www.maps.ie/create-google-map/">Google map generator</a>
            </iframe>
            <Row className="page-break m-bot align-center"></Row>
        </Col>
      </Row>
    )
  }
}

export default MapView;
