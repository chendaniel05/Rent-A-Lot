import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };
  }

  logout = () => {
    localStorage.removeItem("jwtToken");
    window.location.replace("/");
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-custom">
        <Link className="navbar-brand" to="/">
          Rent-a-Lot
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/spot/new" className="nav-link create-recipe-link">Post a Spot<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item mr-3">
              <Link to="/listing" className="nav-link">See Listing<span className="sr-only">(current)</span></Link>
            </li>
            {localStorage.getItem("jwtToken") && (
              <button className="btn btn-primary" onClick={this.logout}>
                Logout
                </button>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}