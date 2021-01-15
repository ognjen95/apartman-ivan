import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Paper, Button, Grid } from '@material-ui/core';
import booking from '../images/booking.svg';

export default class Testimonials extends Component {
  render() {
    return (
      <div id="carouselImage">
        <h1>Ocjene naših gostiju</h1>

        <Carousel
          showArrows={false}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={5000}
        >
          <div
            style={{
              padding: '30px 0',
            }}
          >
            {/* <img src="/images/test.png" /> */}
            <Paper elevation={6} className="myCarousel">
              <img
                style={{ height: '40px', width: '40px' }}
                src={booking}
                alt="Booking"
              />
              <h3>Shirley Fultz</h3>
              <h4>Designer</h4>
              <p>
                It's freeing to be able to catch up on customized news and not
                be distracted by a social media element on the same site
              </p>
            </Paper>
          </div>
          <div style={{ padding: '30px 0', backgroundColor: 'transparent' }}>
            {/* <img src="/images/test.png" /> */}
            <Paper elevation={6} className="myCarousel">
              <img
                style={{ height: '40px', width: '40px' }}
                src={booking}
                alt="Booking"
              />
              <h3>Shirley Fultz</h3>
              <h4>Designer</h4>
              <p>
                It's freeing to be able to catch up on customized news and not
                be distracted by a social media element on the same site
              </p>
            </Paper>
          </div>

          <div style={{ padding: '30px 0' }}>
            {/* <img src="/images/test.png" /> */}
            <Paper elevation={6} className="myCarousel">
              <img
                style={{ height: '40px', width: '40px' }}
                src={booking}
                alt="Booking"
              />
              <h3>Shirley Fultz</h3>
              <h4>Designer</h4>
              <p>
                It's freeing to be able to catch up on customized news and not
                be distracted by a social media element on the same site
              </p>
            </Paper>
          </div>

          <div style={{ padding: '30px 0' }}>
            {/* <img src="/images/test.png" /> */}
            <Paper elevation={6} className="myCarousel">
              <img
                style={{ height: '40px', width: '40px' }}
                src={booking}
                alt="Booking"
              />
              <h3>Shirley Fultz</h3>
              <h4>Designer</h4>
              <p>
                It's freeing to be able to catch up on customized news and not
                be distracted by a social media element on the same site
              </p>
            </Paper>
          </div>
        </Carousel>
      </div>
    );
  }
}
