import React, { Component } from 'react';
import '../css/header.css';
import {Footer} from 'react-materialize';

class AppFooter extends Component {
  render() {
    return (
      <Footer copyrights="2018 Niwot Barber Shop"
        // moreLinks={
        //   <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
        // }
        links={
          <ul>
            <li><a className="grey-text text-lighten-3" href="https://www.pinterest.com/search/pins/?q=mens%20haircuts&rs=typed">Men's Haircuts</a></li>
            <li><a className="grey-text text-lighten-3" href="https://www.pinterest.com/search/pins/?rs=ac&len=2&q=womens%20haircuts&eq=womens%20hair&etslf=8959">Women's Haircuts</a></li>
            <li><a className="grey-text text-lighten-3" href="https://www.stylecraze.com/articles/12-tips-for-getting-healthy-hair/#gref">Hair Care</a></li>
          </ul>
        }
        className='example'
        >
          <h5 className="white-text">Alivia Bell</h5>
          <p className="grey-text text-lighten-4">The Niwot Barber offers affordable hair cuts for men, women and children at her cozy barber shop in the Cottonwood Square Shopping Center.</p>
        </Footer>
    )
  }
}

export default AppFooter;
