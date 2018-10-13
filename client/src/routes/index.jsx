import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import RegisterPage from "views/RegisterPage/RegisterPage.jsx";

// var indexRoutes = [
//   { path: "/landing-page", name: "LandingPage", component: LandingPage },
//   { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
//   { path: "/login-page", name: "LoginPage", component: LoginPage },
//   { path: "/", name: "Components", component: Components },
//   { path: "/register-page", name: "RegisterPage", component: RegisterPage }
// ];

// export default indexRoutes;

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/register' component={RegisterPage} />
        <Route exact path='/profile-page' component={ProfilePage} />
        <Route exact path='/' component={Components} />
        {/* <Route exact path='/show/:id' component={Spot} />
        <Route exact path='/edit/:id' component={Editspot} />
        <Route exact path='/maps' component={MapContainer} /> */}
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;