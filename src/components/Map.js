import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
export class MapContainer extends Component {
  render() {
    const style = {
      width: '100%',
      height: '350px',
      position: 'absolute',
    };
    return (
      <Map
        initialCenter={{
          lat: 43.488834,
          lng: 16.116738,
        }}
        containerStyle={style}
        google={this.props.google}
        zoom={16}
      >
        <Marker onClick={this.onMarkerClick} name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>{/* <h1>{this.state.selectedPlace.name}</h1> */}</div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA92SuzY_72p46dBrprdoAtaHxE2AAxYkE',
})(MapContainer);
