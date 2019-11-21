import React from 'react';
import LoginForm from './LoginForm';

import './index.scss';
import saunaImg from '../../assets/images/sauna.png';
import logo from '../../assets/images/logo-big.png';

const LoginPage = () => {
    return (
        <div className="form">
            <div className="form-container">
                <img src={saunaImg} alt="sauna"/>
                <div className="form-content">
                    <img src={logo} alt="logo"/>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default LoginPage;