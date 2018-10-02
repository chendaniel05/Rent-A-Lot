import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import axios from "axios";

class App extends Component {
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
              {localStorage.getItem("jwtToken") && (
                <button className="btn btn-primary" onClick={this.logout}>
                  Logout
                </button>
              )}
            </h3>
          </div>
          <div className="panel-body">
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>Address</th>
                  <th>Postal Code</th>
                  <th>Price</th>
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
            <Link className="btn btn-primary" to={`/spots/new`}>
              New spot
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
