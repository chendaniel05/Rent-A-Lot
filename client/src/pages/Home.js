import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";


export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    }
  }

  async componentWillMount() {
    try {
      await this.props.getHomePageData();

      this.setState({
        loading: false
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    let homeButtons = (
      <span>
        <Link to="/login" className="btn btn-primary btn-lg mr-2" role="button">Sign in</Link>
        <Link to="/register" className="btn btn-primary btn-lg" role="button" >Join now </Link>
      </span>
    );

    if (localStorage.getItem("jwtToken")) {
      homeButtons = (
        <span>
          <Link to="/spot/new" className="btn btn-primary btn-lg mr-2"> Post a New Spot </Link>
        </span>
      );
    }

    return (
      <div>
        {/* The Jumbotron Area */}
        <div id="jumbotron" className="jumbotron text-center">
          <h1 className="display-3 mb-5">
            {/* <img src={logo} className="jumbotron-logo-img mr-2" /> */}
          </h1>
          <p className="lead jumbotron-title display-4 wow bounceInUp" style={{ color: 'white' }}>Rent-a-Lot</p>
          <br />
          <p className="lead">
            {/* The home button 
                    If the user is authenticated, let him rather see a create recipe button
                */}
            {homeButtons}
            {/* End of the home button */}
          </p>
        </div>
        {/* End of the jumbotron area */}
      </div>
    );
  }
}
