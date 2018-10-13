// import React from "react";
import React, { Component } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import signupPageStyle from "assets/jss/material-kit-react/views/registerPage.jsx";

import "./Login.css";


import image from "assets/img/bg7.jpg";

class Create extends Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      username: "",
      password: ""
    };
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;

    axios.post("/api/auth/register", { username, password }).then(result => {
      this.props.history.push("/login");
    });
  };

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function () {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  render() {
    const { username, password } = this.state;

    const { classes, ...rest } = this.props;
    return (
      <div>
        <Link to="/">
          <Header
            absolute
            color="transparent"
            brand="Rent-a-Lot"
            rightLinks={<HeaderLinks />}
            {...rest}
          />
        </Link>
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>

                  <form className="form-signin" onSubmit={this.onSubmit}>
                    <h2 className="form-signin-heading">Register</h2>
                    <label htmlFor="inputEmail" className="sr-only">
                      Email address
          </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email address"
                      name="username"
                      value={username}
                      onChange={this.onChange}
                      required
                    />
                    <label htmlFor="inputPassword" className="sr-only">
                      Password
          </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={this.onChange}
                      required
                    />
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                    <p>
                      Already registered? <Link to="/login"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>Login here </Link>
                    </p>
                  </form>

                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

export default withStyles(signupPageStyle)(Create);
