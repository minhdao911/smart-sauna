import React from 'react';
import './index.scss';

import logo from '../../assets/images/logo-small.png';

export default function Menu(props){
    return (
        <div className="menu">
            <div className="menu-item">
                <img src={logo} alt="logo" className="menu-logo"/>
            </div>
            <div className="menu-item">
                <a href="#">Monitoring</a>
            </div>
            <div className="menu-item">
                <a href="#">Reservation</a>
            </div>
            <div className="menu-item">
                <a href="#">Management</a>
            </div>
        </div>
    )
}