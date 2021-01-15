import React, { Component } from 'react';
import { Input, TextField, Button } from '@material-ui/core';
import booking from '../images/booking.svg';
import BeachImg from '../images/BeachImg.jpg';
import Map from './Map';
import Facebook from '../images/Facebook.png';
import berislav from '../images/berislav.jpg';

export default class Contact extends Component {
  render() {
    const styles = {
      mainDiv: {
        display: 'flex',
        alignItems: 'center',
        height: '500px',
        // justifyContent: ' space-evenly',
      },
      formDiv: {
        width: '60%',
        height: '100%',
        backgroundColor: '#e1eff2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        lineHeight: '3rem',
      },
      inputs: {
        width: '60%',
      },
      btn: {
        marginTop: '50px',
        width: '60%',
      },
      contactDiv: {
        background: `linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.8)), url(${BeachImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1.5rem',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        margin: 'auto',
        // backgroundColor: 'blue',
        width: '40%',
        fontSize: '1.3rem',
      },
      mapDiv: {
        height: '50%',
        border: '1px solid red',
      },
    };
    return (
      <div>
        <div style={styles.mainDiv}>
          <div style={styles.contactDiv}>
            <img
              style={{
                height: '200px',
                width: '200px',
                borderRadius: '50%',
                border: '2px solid white',
              }}
              src={berislav}
              alt=""
            />
            <div style={{ textAlign: 'left' }}>
              <strong>
                <p>Ime domaćina: Berislav Dizdrav</p>

                <p>Broj telefona: +385 65 9933 9393</p>

                <p>Email: apartmentivan16@gmail.com</p>

                <p>Adresa: Baćine Dolac 16, Vinišće, Hrvatska</p>
              </strong>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',

                  justifyContent: 'space-around',
                }}
              >
                <a
                  target="blank"
                  href="https://www.booking.com/hotel/hr/apartment-ivan-vinisce.html?aid=356980&label=gog235jc-1BCAsoZUIWYXBhcnRtZW50LWl2YW4tdmluaXNjZUgzWANowQGIAQGYASS4ARfIAQzYAQHoAQGIAgGoAgO4AqSWnPkFwAIB0gIkYzdlNDhmNjQtMzVhMC00MmQ4LWI1MjMtYjFmNjcwODQ0NWMw2AIF4AIB&lang=en-us&room1=A%2CA&sb_price_type=total&soz=1&type=total&lang_click=top;cdl=sr;lang_changed=1"
                >
                  <img
                    style={{ height: '40px', width: '40px' }}
                    src={booking}
                    alt="Booking"
                  />
                </a>
                <a
                  target="blank"
                  href="https://www.facebook.com/apartmanivan16/"
                >
                  <img
                    style={{ height: '40px', width: '40px' }}
                    src={Facebook}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>

          <div style={styles.formDiv}>
            <h1>Pošaljite nam poruku</h1>
            <form
              style={{
                lineHeight: '4rem',
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                style={styles.inputs}
                label="Vaše ime"
                inputProps={{ 'aria-label': 'description' }}
              />
              <TextField
                style={styles.inputs}
                label="Vaše prezime"
                inputProps={{ 'aria-label': 'description' }}
              />
              <TextField
                style={styles.inputs}
                label="Vaša email adresa"
                inputProps={{ 'aria-label': 'description' }}
              />
              <TextField
                style={styles.inputs}
                id="standard-textarea"
                label="Vaše pitanje za nas"
                multiline
              />
              <Button
                size="large"
                variant="contained"
                color="primary"
                style={styles.btn}
              >
                Pošalji
              </Button>
            </form>
          </div>
        </div>
        <div>
          <Map />
        </div>
      </div>
    );
  }
}
