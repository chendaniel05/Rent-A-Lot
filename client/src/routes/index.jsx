import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import RegisterPage from "views/RegisterPage/RegisterPage.jsx";
import Listing from "views/Listing/Listing.js";
import Spot from "views/Spot/Spot.js";
import Newspot from "views/Newspot/Newspot.js";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/register' component={RegisterPage} />
        <Route exact path='/listing' component={Listing} />
        <Route exact path='/show/:id' component={Spot} />
        <Route exact path='/spot/new' component={Newspot} />
      </Switch>
    </div>
  </Router>
);

export default App;