import React, { Component } from "react";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
          name={'Current location'} />

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
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
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