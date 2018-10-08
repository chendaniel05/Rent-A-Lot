import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Geocode from "react-geocode";
// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyC2fgI8v3-pjcX-Mz-pNw-SjuhA-D1Cjq8");

// Enable or disable logs. Its optional.
Geocode.enableDebug();

const style = {
  width: '100%',
  height: '100%'
}

export class MapContainer extends Component {
  getLatLng = (spotAddress) => {
    // Get latidude & longitude from address.
    Geocode.fromAddress(spotAddress).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        return {lat:lat, lng:lng};

      },
      error => {
        console.error(error);
      }
    );
  }
  render() {
    return (
      <Map google={this.props.google}
        style={style}
        initialCenter={{
          lat: this.props.lat,
          lng: this.props.lng
        }}
        zoom={14}>

        {this.props.spots.map((spot) =>
          <Marker
            title={spot.address}
            name={'SOMA'}
            position={this.getLatLng(spot.address)} />
        )}


        <InfoWindow onClose={this.onInfoWindowClose}>
          {/* <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div> */}
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC2fgI8v3-pjcX-Mz-pNw-SjuhA-D1Cjq8",
  v: "3.30"
})(MapContainer);

// import { GoogleMap, withGoogleMap } from 'react-google-maps';
// import { default as React, Component } from 'react';

// const googleMapUrl = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
// const API_KEY = "AIzaSyC2fgI8v3-pjcX-Mz-pNw-SjuhA-D1Cjq8";

// const SimpleGoogleMap = withGoogleMap(props => (
//   <GoogleMap
//     googleMapUrl={googleMapUrl}
//     zoom={props.zoom}
//     center={props.center}
//   />


// export default class Map extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       zoom: 11,
//       center: { lat: 29.969516, lng: -90.103866 },
//       markers: [],
//       markersLoaded: false,
//     };
//   }
//   render() {
//     return (
//       <SimpleGoogleMap
//         containerElement={
//           <div className="mapContainer" />
//         }
//         mapElement={
//           <div className="map" />
//         }
//       />
//     );
//   }
// }