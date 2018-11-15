import React, { Component } from 'react';
import '../css/review.css';
import {Row, Col, CardPanel} from 'react-materialize';

class Review extends Component {
  render() {

    let comments = [
      "Big fan of this place.  Alivia makes it happen and is great to talk to during your haircut.  It's really difficult to get a quality cut at the chain shops and the other old school barber shops in the area aren't really worthy of mention.  It's easy to get a quality cut from Alivia and the prices aren't ridiculous either.  Really happy with this place. -Andy Idema",
      "Olivia has been providing great service for many years. She gives a $50 haircut for half that cost; and always professional and friendly. Call ahead for an appointment. -Richard Black",
      "Alivia is a great barber! If you're tired of getting a so-so cut at the chain shops and want a real, good hair cut at a reasonable price, you owe it to yourself to go see her. -Bill Helms",
      "Great barber shop. Clean and comfortable. Alivia has 30 years experience in barbering. Knows what she's doing. -David Johnson"
    ]

    const commentsMap = () => {
      let size = 5
      return comments.map(comment => {
        if (size === 2) {
          size += 3
        } else {
          size -= 3
        }
        return (
          <Row>
            <Col s={1} m={3} l={size}></Col>
            <Col s={10} m={6} l={5}>
              <CardPanel className="review lighten-4 white-text center-align">
                <h6>{comment}</h6>
              </CardPanel>
            </Col>
          </Row>
        )
      })
    }

    return (
      <div>
        <Row id="review">
          <Col s={1} m={3} l={4}></Col>
          <Col s={10} m={6} l={4}>
            <h4 className="center-align">Reviews</h4>
            <p className="center-align contact-info">See what people are saying about us!</p>
          </Col>
        </Row>
        {commentsMap()}
      </div>
    )
  }
}

export default Review;
