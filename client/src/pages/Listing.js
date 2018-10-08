import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MapContainer from "../components/MapContainer";
import "./Login.css";


class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spots: [],
      lat: 43.6532,
      lng: -79.3832
    };
  }

  componentDidMount() {
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "jwtToken"
    );
    axios
      .get("/api/spot")
      .then(res => {
        this.setState({ spots: res.data });
        console.log(this.state.spots);
      })
      .catch(error => {
        if (error.response.status == 401) {
          this.props.history.push("/login");
        }
      });
  }

  logout = () => {
    localStorage.removeItem("jwtToken");
    window.location.reload();
  };

  render() {
    return (
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

            <MapContainer lat={this.state.lat} lng={this.state.lng} spots={this.state.spots}/>

          </div>
        </div>
      </div>
    );
  }
}

export default Listing;
