import React, { Component } from 'react';
import '../css/contact.css';
import {Button} from 'react-materialize'

let scrollToElement = require('scroll-to-element')

let code = ['#review', '#contact', '#hours', '#location']
let codeArray = []

const arraysEqual = (arr1, arr2) => {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}

const animate = element => {
  codeArray.push(element)
  if (arraysEqual(codeArray, code)){
    alert('You broke the code!!!')
  }
  scrollToElement(element, {
    offset: -90,
    ease: 'inOutCube',
    duration: 1500
  })
}

class NavButton extends Component {
  render() {
    return (
      <Button floating fab='vertical' icon='sentiment_very_satisfied' className='purple' large style={{bottom: '150px', right: '50px'}}>
      <Button floating icon='content_cut' onClick={() => animate('#services')} className='red'/>
      <Button floating icon='access_time' onClick={() => animate('#hours')} className='orange'/>
        <Button floating icon='local_phone' onClick={() => animate('#contact')} className='yellow darken-1'/>
        <Button floating icon='location_on' onClick={() => animate('#location')} className='green'/>
        <Button floating icon='people'  onClick={() => animate('#review')} className='blue'/>
      </Button>
    )
  }
}

export default NavButton
