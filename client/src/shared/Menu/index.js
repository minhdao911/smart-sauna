import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.scss';
import logo from '../../assets/images/logo-small.png';

import UserOptions from './UserOptions';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

export default function Menu(){
    return (
        <AuthUserContext.Consumer>
            {authUser => authUser ? (
            <div className="menu-container">
                <div className="menu">
                    <div className="menu-item">
                        <img src={logo} alt="logo" className="menu-logo"/>
                    </div>
                    <div className="menu-item">
                        <NavLink to={ROUTES.MONITORING} activeClassName="active">Monitoring</NavLink>
                    </div>
                    <div className="menu-item">
                        <NavLink to={ROUTES.RESERVATION} activeClassName="active">Reservation</NavLink>
                    </div>
                    <div className="menu-item">
                        <NavLink to={ROUTES.MANAGEMENT} activeClassName="active">Management</NavLink>
                    </div>
                </div>
                <UserOptions authUser={authUser}/>
            </div>
            ): null}
        </AuthUserContext.Consumer>
    )
}