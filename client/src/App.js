import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Menu from './shared/Menu';
import Monitoring from './components/Monitoring';
import Reservation from './components/Reservation';
import Login from './components/LoginPage';
import Signup from './components/SignupPage';
import Management from './components/Management';

import * as ROUTES from './constants/routes';
import { withAuthentication } from './shared/Session';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Route path={ROUTES.LOG_IN} component={Login} />
        <Route path={ROUTES.SIGN_UP} component={Signup} />
        <Route exact path="/" component={Monitoring} />
        <Route path={ROUTES.MONITORING} component={Monitoring} />
        <Route path={ROUTES.RESERVATION}>
        <Route path={ROUTES.MANAGEMENT} component={Management} />
          <Reservation />
        </Route>
      </div>
    </Router>
  );
}

export default withAuthentication(App);
