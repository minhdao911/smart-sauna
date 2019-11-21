import React from 'react';
import { withFirebase } from '../../Firebase';
import { Menu, Dropdown, Avatar } from 'antd';

import './index.scss';

const UserOptions = ({firebase, authUser}) => {
    const onClick = ({key}) => {
        switch(key){
            case "1": {
                firebase.doSignOut();
            }
            default: 
                break;
        }
    }

    const menu = (
        <Menu onClick={onClick}>
            <Menu.Item key="1">Signout</Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu} className="user-options">
            <div className="user-info">
                <Avatar icon="user" className="user-avatar"/>
                <span>{authUser.email}</span>
            </div>
        </Dropdown>
    )
}

export default withFirebase(UserOptions);