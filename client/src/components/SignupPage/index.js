import React from 'react';
import SignupForm from './SignupForm';

import './index.scss';
import saunaImg from '../../assets/images/sauna.png';
import logo from '../../assets/images/logo-big.png';

const SignupPage = () => {
    return (
        <div className="form">
            <div className="form-container">
                <img src={saunaImg} alt="sauna"/>
                <div className="form-content">
                    <img src={logo} alt="logo"/>
                    <SignupForm />
                </div>
            </div>
        </div>
    )
}

export default SignupPage;