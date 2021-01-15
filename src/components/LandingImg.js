import React, { Component } from 'react';
import Background from '../images/BeachImg.jpg';
import { Typography } from '@material-ui/core';

class LandingImg extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${Background})`,
          height: '92vh',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          fontSize: '2rem',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* <Typography variant="h1" noWrap style={{ paddingTop: '10%' }}>
          <strong>APARTMENT IVAN</strong>
        </Typography> */}
        <h1 className="h1Landing">
          <strong>DOBRODOŠLI</strong>
        </h1>
      </div>
    );
  }
}
export default LandingImg;
