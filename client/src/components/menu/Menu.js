import React from 'react';
import './Menu.scss';

import logo from '../../assets/images/logo-small.png';

export default function Menu(props){
    return (
        <div className="menu">
            <div className="menu__item">
                <img src={logo} alt="logo" className="menu__logo"/>
            </div>
            <div className="menu__item">
                <a href="#">Monitoring</a>
            </div>
            <div className="menu__item">
                <a href="#">Reservation</a>
            </div>
            <div className="menu__item">
                <a href="#">Management</a>
            </div>
        </div>
    )
}