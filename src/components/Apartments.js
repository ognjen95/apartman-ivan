import React, { Component } from 'react';
import Kreveti from '../images/Kreveti.jpg';
import { Paper, Button, Grid } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import IconButton from '@material-ui/core/IconButton';
import Background2 from '../images/BeachImg2.jpg';
import { groundFloor, topFloor } from '../imgArr';
import LocalParkingSharpIcon from '@material-ui/icons/LocalParkingSharp';
import WifiSharpIcon from '@material-ui/icons/WifiSharp';
import OutdoorGrillSharpIcon from '@material-ui/icons/OutdoorGrillSharp';
import KingBedSharpIcon from '@material-ui/icons/KingBedSharp';
import WeekendSharpIcon from '@material-ui/icons/WeekendSharp';
import DirectionsBoatSharpIcon from '@material-ui/icons/DirectionsBoatSharp';
import PeopleAltSharpIcon from '@material-ui/icons/PeopleAltSharp';
import VisibilitySharpIcon from '@material-ui/icons/VisibilitySharp';
import Accordion from './Accordion';
import Modal from './Modal';
export default class Apartments extends Component {
  state = {
    x: 0,
    x2: 0,
  };

  onClick = (e) => {
    const imgs = [...document.querySelectorAll('.imgCarousel')];
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const arrNum2 = (imgs.length - 1) * 100;
    console.log(this.state.x);
    if (e.currentTarget == nextButton) {
      console.log('123');
      prevButton.style.visibility = 'visible';
      this.state.x >= arrNum2
        ? (nextButton.style.visibility = 'hidden')
        : this.setState(
            (prevState) => ({ x: prevState.x + 100 }),
            () => console.log(this.state.x, imgs.length)
          );
    } else if (e.currentTarget == prevButton) {
      nextButton.style.visibility = 'visible';
      this.state.x <= 0
        ? (prevButton.style.visibility = 'hidden')
        : this.setState(
            (prevState) => ({ x: prevState.x - 100 }),
            () => console.log(this.state.x, imgs.length)
          );
    }
  };
  onClick2 = (e) => {
    const imgs2 = [...document.querySelectorAll('.imgCarousel2')];
    const nextButton = document.querySelector('.next2');
    const prevButton = document.querySelector('.prev2');
    const arrNum2 = (imgs2.length - 1) * 100;
    console.log(this.state.x2);
    if (e.currentTarget == nextButton) {
      console.log('123');
      prevButton.style.visibility = 'visible';
      this.state.x2 >= arrNum2
        ? (nextButton.style.visibility = 'hidden')
        : this.setState(
            (prevState) => ({ x2: prevState.x2 + 100 }),
            () => console.log(this.state.x2, imgs2.length)
          );
    } else if (e.currentTarget == prevButton) {
      nextButton.style.visibility = 'visible';
      this.state.x2 <= 0
        ? (prevButton.style.visibility = 'hidden')
        : this.setState(
            (prevState) => ({ x2: prevState.x2 - 100 }),
            () => console.log(this.state.x2, imgs2.length)
          );
    }
  };

  render() {
    const styles = {
      mainD: {
        maxWidth: '450px',
        objectFit: 'contain',
        // paddingBottom: '10px',
        position: 'relative',

        borderRadiusTop: '1%',
        boxShadow: '10px 9px 7px 0px rgba(0, 0, 0, 0.75) 10',
      },
      img: {
        width: '100%',
        height: '100%',
      },
      pDiv: {
        fontSize: '14px',
        padding: '20px',
        margin: '0',
        textAlign: 'left',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
      },
      btnDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'absolute',
        left: '0',
        bottom: '30%',
        width: '100%',
      },
      iconDiv: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginRight: '5px',
      },
    };
    const imgs = [...document.querySelectorAll('.imgCarousel')];
    const imgsGroundFloor = [...groundFloor];
    const imgsTopFloor = [...topFloor];

    imgs.forEach(
      (img) => (img.style.transform = `translateX(-${this.state.x}%)`)
    );
    const groundImgs = imgsGroundFloor.map(({ id, src, description }) => (
      <img className="imgCarousel" src={src} alt={description} key={id} />
    ));

    const imgs2 = [...document.querySelectorAll('.imgCarousel2')];
    const topImgs = imgsTopFloor.map(({ id, src, description }) => (
      <img className="imgCarousel2" src={src} alt={description} key={id} />
    ));
    imgs2.forEach(
      (img) => (img.style.transform = `translateX(-${this.state.x2}%)`)
    );
    console.log(groundImgs);
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          background: `linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url(${Background2})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          padding: '70px 0 120px 0',
        }}
        className="carouselWraper"
      >
        <Paper className="paperDiv" style={styles.mainD} elevation={22} square>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <h3 style={{ marginRight: '5px' }}>Apartman prizemlje - 8</h3>
            <PeopleAltSharpIcon />
          </div>
          <div>
            <div style={{ position: 'relative' }}>
              <div className="apartmentCarousel">{groundImgs}</div>
              <div style={styles.btnDiv}>
                <IconButton
                  style={{ color: 'white' }}
                  className="prev prevNext"
                  onClick={this.onClick}
                >
                  <NavigateBeforeIcon fontSize="large" />
                </IconButton>
                <IconButton
                  style={{ color: 'white' }}
                  className="next prevNext"
                  onClick={this.onClick}
                >
                  <NavigateNextIcon fontSize="large" />
                </IconButton>
              </div>
            </div>
            <div>
              <div style={styles.pDiv}>
                <div>
                  <div style={styles.iconDiv}>
                    <KingBedSharpIcon
                      style={{ marginRight: '5px' }}
                      color="primary"
                    />{' '}
                    Spavaća soba 1: bračni krevet x1
                  </div>
                  <div style={styles.iconDiv}>
                    <KingBedSharpIcon
                      style={{ marginRight: '5px' }}
                      color="primary"
                    />{' '}
                    Spavaća soba 2: bračni krevet x1
                  </div>
                  <div style={styles.iconDiv}>
                    <KingBedSharpIcon
                      style={{ marginRight: '5px' }}
                      color="primary"
                    />{' '}
                    Spavaća soba 3: bračni krevet x1
                  </div>
                  <div style={styles.iconDiv}>
                    <WeekendSharpIcon
                      style={{ marginRight: '5px' }}
                      color="primary"
                    />{' '}
                    Dnevna soba: dvosjed na razvlačenje
                  </div>
                </div>
                <div>
                  <div style={styles.iconDiv}>
                    <WifiSharpIcon
                      style={{ marginRight: '5px' }}
                      color="primary"
                    />{' '}
                    Besplatan internet
                  </div>

                  <div style={styles.iconDiv}>
                    <LocalParkingSharpIcon
                      style={{ marginRight: '5px' }}
                      color="primary"
                    />
                    Besplatan parking
                  </div>

                  <div style={styles.iconDiv}>
                    <OutdoorGrillSharpIcon
                      style={{ marginRight: '5px' }}
                      color="primary"
                    />
                    Besplatan roštilj
                  </div>
                  <div style={styles.iconDiv}>
                    <DirectionsBoatSharpIcon
                      style={{ marginRight: '5px' }}
                      color="primary"
                    />
                    Plaćena vožnja čamcem
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                textAlign: 'left',
                paddingLeft: '20px',
                marginBottom: '10px',
                display: 'flex',
              }}
            >
              <Button
                style={{
                  marginRight: '10px',
                }}
                size="small"
                variant="contained"
                color="primary"
                target="blank"
                href="https://www.booking.com/hotel/hr/apartment-ivan-vinisce.html?aid=356980&label=gog235jc-1BCAsoZUIWYXBhcnRtZW50LWl2YW4tdmluaXNjZUgzWANowQGIAQGYASS4ARfIAQzYAQHoAQGIAgGoAgO4AqSWnPkFwAIB0gIkYzdlNDhmNjQtMzVhMC00MmQ4LWI1MjMtYjFmNjcwODQ0NWMw2AIF4AIB&lang=en-us&room1=A%2CA&sb_price_type=total&soz=1&type=total&lang_click=top;cdl=sr;lang_changed=1"
              >
                Rezerviši
              </Button>
              <Modal Galery={groundImgs} />
            </div>
          </div>
          <Accordion />
        </Paper>
        <Paper style={styles.mainD} elevation={22} square>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <h3 style={{ marginRight: '5px' }}>
              Apartman sa pogledom na more - 6
            </h3>
            <PeopleAltSharpIcon />
          </div>
          <div>
            <div style={{ position: 'relative' }}>
              <div className="apartmentCarousel">{topImgs}</div>
              <div style={styles.btnDiv}>
                <IconButton
                  style={{ color: 'white' }}
                  className="prev2 prevNext"
                  onClick={this.onClick2}
                >
                  <NavigateBeforeIcon fontSize="large" />
                </IconButton>
                <IconButton
                  style={{ color: 'white' }}
                  className="next2 prevNext"
                  onClick={this.onClick2}
                >
                  <NavigateNextIcon fontSize="large" />
                </IconButton>
              </div>
            </div>
            <div>
              <div style={styles.pDiv}>
                <div>
                  <div style={styles.iconDiv}>
                    <KingBedSharpIcon
                      style={{ marginRight: '5px' }}
                      color="primary"
                    />{' '}
                    Spavaća soba 1: bračni krevet x1 <br />
                  </div>
                  <div style={styles.iconDiv}>
                    <KingBedSharpIcon
                      style={{ marginRight: '5px' }}
                      color="primary"
                    />{' '}
                    Spavaća soba 2: bračni krevet x1 <br />
                  </div>

                  <div style={styles.iconDiv}>
                    <WeekendSharpIcon
                      style={{ marginRight: '5px' }}
                      color="primary"
                    />{' '}
                    Dnevna soba: dvosjed na razvlačenje x1
                    <br />
                  </div>
                  <div style={styles.iconDiv}>
                    <VisibilitySharpIcon
                      style={{ marginRight: '5px' }}
                      color="primary"
                    />
                    Balkon sa pogledom na more
                  </div>
                </div>
                <div>
                  <div style={styles.iconDiv}>
                    <WifiSharpIcon
                      style={{ marginRight: '5px' }}
                      color="primary"
                    />{' '}
                    Besplatan internet
                  </div>
                  <div style={styles.iconDiv}>
                    <LocalParkingSharpIcon
                      style={{ marginRight: '5px' }}
                      color="primary"
                    />
                    Besplatan parking
                  </div>
                  <div style={styles.iconDiv}>
                    <OutdoorGrillSharpIcon
                      style={{ marginRight: '5px' }}
                      color="primary"
                    />
                    Besplatan roštilj
                  </div>
                  <div style={styles.iconDiv}>
                    <DirectionsBoatSharpIcon
                      style={{ marginRight: '5px' }}
                      color="primary"
                    />
                    Plaćena vožnja čamcem
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                textAlign: 'left',
                paddingLeft: '20px',
                marginBottom: '10px',
                display: 'flex',
              }}
            >
              <Button
                style={{
                  marginRight: '10px',
                }}
                size="small"
                variant="contained"
                color="primary"
                target="blank"
                href="https://www.booking.com/hotel/hr/apartment-ivan-vinisce.html?aid=356980&label=gog235jc-1BCAsoZUIWYXBhcnRtZW50LWl2YW4tdmluaXNjZUgzWANowQGIAQGYASS4ARfIAQzYAQHoAQGIAgGoAgO4AqSWnPkFwAIB0gIkYzdlNDhmNjQtMzVhMC00MmQ4LWI1MjMtYjFmNjcwODQ0NWMw2AIF4AIB&lang=en-us&room1=A%2CA&sb_price_type=total&soz=1&type=total&lang_click=top;cdl=sr;lang_changed=1"
              >
                Rezerviši
              </Button>

              <Modal Galery={topImgs} />
            </div>
          </div>
          <Accordion />
        </Paper>
      </div>
    );
  }
}
