import React from 'react';
import './index.scss';

import roomImg from '../../../assets/images/room.png';

export default function Room(props){
    const {name} = props;
    return (
        <div className="room">
            <img src={roomImg} alt="room"/>
            <p>{name}</p>
        </div>
    )
}