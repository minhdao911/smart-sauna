import React, { useState, useEffect } from 'react';
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
import NavBarMobile from './shared/NavBarMobile';

import * as ROUTES from './constants/routes';
import { withAuthentication } from './shared/Session';

const App = () => {
  const [mobileNavLayout, setMobileNavLayout] =  useState(false)
  useEffect(() => {
    function changeMenuDisplay() {
      if (window.innerWidth > 600) {
        setMobileNavLayout(false)
      } else {
        setMobileNavLayout(true)
      }
    }
    window.addEventListener('resize', changeMenuDisplay);
    changeMenuDisplay();
    return () => window.removeEventListener('resize', changeMenuDisplay);
  }, [])

  return (
    <Router>
      <div className="App">
        {!mobileNavLayout ? <Menu /> : <NavBarMobile/>}
        <Route path={ROUTES.LOG_IN} component={Login} />
        <Route path={ROUTES.SIGN_UP} component={Signup} />
        <Route exact path="/" component={Monitoring} />
        <Route path={ROUTES.MONITORING} component={Monitoring} />
        <Route path={ROUTES.RESERVATION} component={Reservation} />
        <Route path={ROUTES.MANAGEMENT} component={Management} />
      </div>
    </Router>
  );
}

export default withAuthentication(App);
