import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './index.css';

import Home from './pages/Home';
import Listing from './pages/Listing';
import Login from './pages/Login';
import Register from './pages/Register';
import Newspot from './pages/Newspot';
import Spot from './pages/Spot';
import Editspot from './pages/Editspot';
import MapContainer from './components/MapContainer';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import NoMatch from "./pages/NoMatch";


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/listing' component={Listing} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/spot/new' component={Newspot} />
        <Route exact path='/show/:id' component={Spot} />
        <Route exact path='/edit/:id' component={Editspot} />
        <Route exact path='/maps' component={MapContainer} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
      <Footer />

    </div>
  </Router>
);

export default App;
