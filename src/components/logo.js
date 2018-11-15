import React, { Component } from 'react';
import '../css/header.css';

class Logo extends Component {

  render() {
    return (
      <div className="logo-wrapper">
        <div className="barbershop-pole"></div>
        <div className="title">Niwot Barber Shop</div>
      </div>
    )
  }
}

export default Logo;
