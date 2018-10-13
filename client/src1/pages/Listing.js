import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyC2fgI8v3-pjcX-Mz-pNw-SjuhA-D1Cjq8");

// Enable or disable logs. Its optional.
Geocode.enableDebug();

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spots: []
    };
  }

  componentDidMount() {
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "jwtToken"
    );
    axios
      .get("/api/spot")
      .then(res => {
        this.setState({
          spots: res.data
        }, this.renderMap());
        console.log(this.state.spots);
      })
      .catch(error => {
        if (error.response.status == 401) {
          this.props.history.push("/login");
        }
      });
  }

  // logout = () => {
  //   localStorage.removeItem("jwtToken");
  //   window.location.reload();
  // };

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyC2fgI8v3-pjcX-Mz-pNw-SjuhA-D1Cjq8&callback=initMap")
    window.initMap = this.initMap
  }

  initMap = () => {

    // Create a Map
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 43.7032, lng: -79.3832 },
      zoom: 12
    })

    // Create an InfoWindow
    var infowindow = new window.google.maps.InfoWindow()

    // Display Dynamic Markers (by looping through array of spots)
    this.state.spots.map(mySpot => {

      var contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        //TODO:  Fix href url
        '<h6 id="firstHeading" class="firstHeading"><a href="https://www.google.com/maps/place/">' + `${mySpot.address}` + '</a>' + '</h6>' +
        '<div id="bodyContent">' +
        '<h6>Price: <b>' + `${mySpot.price}` + '</b></h6>' +
        '<h6>Contact Info: <b>' + `${mySpot.contact}` + '</b></h6>' +
        '<p>Type: ' + `${mySpot.type}` + '</p>' +
        '<p>Description: ' + `${mySpot.description}` + '</p>' +
        '<p>Postal Code: ' + `${mySpot.postalcode}` + '</p>' +
        '</div>' +
        '</div>';

      console.log(mySpot.address, "inside loop");

      // Get latitude & longitude from address using Geocoding
      Geocode.fromAddress(mySpot.address).then(
        response => {
          const { lat, lng } = response.results[0].geometry.location;

          console.log(lat, lng, "lat, lng");

          // Create a Marker
          var marker = new window.google.maps.Marker({
            position: { lat: lat, lng: lng },
            map: map,
            title: mySpot.address
          })

          // Click on a Marker
          marker.addListener('click', function () {

            // Change the content
            infowindow.setContent(contentString)

            // Open an InfoWindow
            infowindow.open(map, marker)
          })
        }).catch(
          error => {
            console.error(error);
          }
        );
    })
  }

  render() {
    return (
      <main>
        <div id="map"></div>
        <div className="container">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">
                PARKING SPOTS LISTING &nbsp;
              <Link className="btn btn-primary" to={`/spot/new`}>
                  Add New Spot
            </Link>
              </h3>
            </div>
            <div className="panel-body">
              <table className="table table-stripe">
                <thead>
                  <tr>
                    <th>Address</th>
                    <th>Postal Code</th>
                    <th>Price ($/Hour)</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.spots.map(spot => (
                    <tr>
                      <td>
                        <Link
                          to={{
                            pathname: `/show/${spot._id}`,
                            state: spot
                          }}
                        >
                          {spot.address}
                        </Link>
                      </td>
                      <td>{spot.postalcode}</td>
                      <td>{spot.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

// Function for loading Google Maps API script in Vanilla Javascript
function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default Listing;
