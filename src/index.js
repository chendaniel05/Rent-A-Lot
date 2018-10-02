import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login';
import Register from './components/Register';
import Newspot from './components/Newspot';
import Spot from './components/Spot';
import Editspot from './components/Editspot';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App}/>
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/spots/new' component={Newspot} />
            <Route exact path='/show/:id' component={Spot} />
            <Route exact path='/edit/:id' component={Editspot} />
        </div>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
