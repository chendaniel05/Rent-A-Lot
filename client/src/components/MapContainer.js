import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Geocode from "react-geocode";
// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyC2fgI8v3-pjcX-Mz-pNw-SjuhA-D1Cjq8");

// Enable or disable logs. Its optional.
Geocode.enableDebug();

const style = {
  width: '150vh',
  height: '100vh'
}

export class MapContainer extends Component {
  getLatLng = (spotAddress) => {
    // Get latitude & longitude from address.
    Geocode.fromAddress(spotAddress).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        return { lat: lat, lng: lng };

      }).catch(
        error => {
          console.error(error);
        }
      );
  }

  // componentDidMount() {

  //   console.log(this.props.spots[0].address)
  //   const latLngArray = [];

  //   {
  //     this.props.spots.map((spot) => {
  //       console.log(spot.address)
  //       console.log(this.getLatLng(spot.address))
  //       const latLng = this.getLatLng(spot.address)
  //       latLngArray.push(latLng)
  //     }
  //     )
  //   }
  // }

  render() {
    return (
      <Map google={this.props.google}
        style={style}
        initialCenter={{
          lat: this.props.lat,
          lng: this.props.lng
        }}
        zoom={14}>

        {this.props.spots.map((spot) => {
          console.log(spot, "here")

          return <Marker
            title={spot.address}
            name={'SOMA'}
            position={this.getLatLng(spot.address)} />
        }

        )}


        {/* <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.props.address}</h1>
          </div>
        </InfoWindow> */}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC2fgI8v3-pjcX-Mz-pNw-SjuhA-D1Cjq8",
  v: "3.30"
})(MapContainer);
