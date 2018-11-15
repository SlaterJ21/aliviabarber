import React, { Component } from 'react';
import Logo from './logo'
import '../css/header.css';
import {Navbar, NavItem} from 'react-materialize'

let scrollToElement = require('scroll-to-element')

let animate = element => {
  scrollToElement(element, {
    offset: -90,
    ease: 'inOutCube',
    duration: 1500
  })
}

class Header extends Component {
  render() {
    return (
      <Navbar id="top" className="header" brand={<Logo/>} fixed right>
      <NavItem onClick={() => animate('#services')}>Services</NavItem>
      <NavItem onClick={() => animate('#hours')}>Hours</NavItem>
        <NavItem onClick={() => animate('#contact')}>Contact</NavItem>
        <NavItem onClick={() => animate('#location')}>Find Us</NavItem>
        <NavItem onClick={() => animate('#review')}>Reviews</NavItem>
      </Navbar>
    )
  }
}

export default Header
