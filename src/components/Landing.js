import React, { Component } from 'react';
import LandingImg from './LandingImg';
import ExploreVinisce from './ExploreVinisce';
import Apartments from './Apartments';
import Testimonials from './Testimonials';
import Contact from './Contact';

class Landing extends Component {
  render() {
    return (
      <div>
        <LandingImg />
        <ExploreVinisce />
        <Apartments />
        <Testimonials />
        <Contact />
      </div>
    );
  }
}
export default Landing;
