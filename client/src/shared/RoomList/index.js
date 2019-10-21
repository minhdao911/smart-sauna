import React from 'react';
import './index.scss'

import Room from './Room';

export default function RoomList(props){
    const {list} = props;
    return (
        <div className="room-list">
            {list.map((room, index) => {
                return <Room key={index} name={room.name}/>
            })}
        </div>
    )
}