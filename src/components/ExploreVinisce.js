import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Vinisce1 from '../images/Vinisce1.jpg';
import Trogir from '../images/Trogir.jpg';
import '../App.css';

export default class ExploreVinisce extends Component {
  render() {
    return (
      <div className="mainDiv">
        <Container>
          <Grid
            style={{ margin: '50px 0' }}
            container
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} md={5}>
              <div>
                <h1>Upoznaj Vinišće i Trogir</h1>
                <p style={{ textAlign: 'left', color: 'black' }}>
                  U Vinšću 100 metara od mora nalazi se apartman Ivan. Apartman
                  ukupno ima površinu 97 kvadratnih metera.Smješten je u
                  prizemlju objekta s pripadajućim vrtom i terasom , idealan su
                  izbor za obitelji s djecom,osobama željne mira ,romantičarima
                  .Smještaj je idealan za 6 osoba .
                  <br />
                  Apartman ima tri spavaće sobe, svaka sa bracnim krevetom ,tri
                  kupaonice sa wc i tuš kadom , kuhinju i dnevni boravak sa
                  tarasom , TV, internet , klima ,sef, vlastiti parking.
                  <br /> <br />
                  Apartman je označen sa četiri zvjezdice. Isto tako udaljeni
                  samo pedesetak metara od najbližeg
                  restorana,picerije,samoposluge,pekare,male tržnice itd.
                  Posjetite Vinišće i doživite nezaboravan odmor u ovom malom
                  mjestu s prekrasnom prirodom i čistim morem.
                  <br /> <br />
                  {/* Discover new cultures and have a wonderful rest with Backpack
                  Story! Select the country you’d like to visit and provide our
                  agents with estimated time – they’ll find and offer the most
                  suitable tours and hotels. During our work we organized
                  countless journeys for our clients. <br /> <br /> */}
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={7}>
              <div>
                <div
                  className="imgDiv"

                  // style={{
                  //   zIndex: '20',
                  //   display: 'block',
                  // }}
                >
                  <img
                    className="img1"
                    // style={style.img1}
                    src={Vinisce1}
                    alt=""
                  />
                  <img
                    className="img2"
                    // style={style.img2}
                    src={Trogir}
                    alt=""
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}
