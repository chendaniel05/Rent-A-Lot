import React, { Component } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import "./Login.css";
// import MapContainer from "../components/MapContainer";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import profile from "assets/img/faces/christian.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";


import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class Spot extends Component {
  state = {
    isUserOwner: false,
    spots: []
  };

  // onDelete = () => {
  //   var result = window.confirm("Are you sure you want to delete?");
  //   if (result) {
  //     console.log("deleted");
  //     axios
  //       .delete("/api/spot/" + this.props.location.state._id)
  //       .then(result => {
  //         console.log(result);
  //         this.props.history.push("/");
  //       });
  //   }
  // };

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Link to="/">
          <Header
            brand="Rent-a-Lot"
            rightLinks={<HeaderLinks />}
            fixed
            color="transparent"
            changeColorOnScroll={{
              height: 400,
              color: "white"
            }}
            {...rest}
          />
        </Link>
        <Parallax small filter image={require("assets/img/bg.jpg")} />

        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <div class="jumbotron">
          <h2 class="display-5">{this.props.location.state.address}</h2>
          <p class="lead">
            <strong>
              <em>Address: </em>
            </strong>&nbsp;{this.props.location.state.address}
            <hr />
          </p>
          <p class="lead">
            <strong>
              <em>Postal Code (if applicable): </em>
            </strong>&nbsp;{this.props.location.state.postalcode}
            <hr />
          </p>
          <p class="lead">
            <strong>
              <em>Price: </em>
            </strong>&nbsp;{this.props.location.state.price}
            <hr />
          </p>
          <p class="lead">
            <strong>
              <em>Type: </em>
            </strong>&nbsp;{this.props.location.state.type}
            <hr />
          </p>
          <p class="lead">
            <strong>
              <em>Description: </em>
            </strong>&nbsp;{this.props.location.state.description}
            <hr />
          </p>
          <p class="lead">
            <strong>
              <em>Contact: </em>
            </strong>&nbsp;{this.props.location.state.contact}
            <hr />
          </p>
          {this.state.isUserOwner && <Link
            className="btn btn-warning"
            to={{
              pathname: `/edit/${this.props.location.state._id}`,
              state: this.props.location.state
            }}
          >
            Edit
        </Link>}&nbsp;&nbsp;
        {this.state.isUserOwner && <button onClick={this.onDelete} className="btn btn-danger"
          >
            Delete
        </button>}&nbsp;&nbsp;
  
        </div>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div >
        <Footer />
      </div >
    );
  }
}

export default withStyles(profilePageStyle)(Spot);

