import React, { Component } from 'react';
import AppFooter from './components/footer'
import Contact from './components/contact'
import Mapview from './components/mapview'
import Location from './components/location'
import Header from './components/header'
import NavButton from './components/nav-button'
import Hours from './components/hours'
import Review from './components/review'
import Services from './components/services'
import {Row, Col} from 'react-materialize';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <Row className="topPad">
          <Col s={0} m={2} l={2}></Col>
          <Col className="border" s={12} m={8} l={8}>
            <Services/>
            <Hours/>
            <Contact/>
            <Location/>
            <Mapview/>
            <Review/>
            <NavButton/>
          </Col>
        </Row>
        <AppFooter/>
      </div>
    );
  }
}

export default App;
