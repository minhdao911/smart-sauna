import React from 'react';
import './index.scss';

import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo-small.png';

export default function Menu(props){
    return (
        <div className="menu">
            <div className="menu-item">
                <img src={logo} alt="logo" className="menu-logo"/>
            </div>
            <div className="menu-item">
                <NavLink to="/monitoring" activeClassName="active">Monitoring</NavLink>
            </div>
            <div className="menu-item">
                <NavLink to="/reservation" activeClassName="active">Reservation</NavLink>
            </div>
            <div className="menu-item">
                <NavLink to="/management" activeClassName="active">Management</NavLink>
            </div>
        </div>
    )
}