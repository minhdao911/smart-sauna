import React from 'react';
import LoginForm from './LoginForm';
import { withFirebase } from '../../shared/Firebase';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import './index.scss';
import saunaImg from '../../assets/images/sauna.png';
import logo from '../../assets/images/logo-big.png';

const LoginFormWrapped = compose(
    withRouter,
    withFirebase,
)(LoginForm);

const LoginPage = () => {
    return (
        <div className="form">
            <div className="form-container">
                <img src={saunaImg} alt="sauna"/>
                <div className="form-content">
                    <img src={logo} alt="logo"/>
                    <LoginFormWrapped />
                </div>
            </div>
        </div>
    )
}

export default LoginPage;