import React from 'react';
import './index.scss';

import roomImg from '../../../assets/images/room.png';

export default function Room(props){
    const {room, updateChosenRoom, chosenRoom} = props;

    const handleOnClick = (newRoom) => {
        updateChosenRoom(newRoom);
    }

    return (
        <div className={'room ' + (room.room === chosenRoom.room ? 'chosen' : '')} onClick={() => handleOnClick(room)}>
            <img src={roomImg} alt="room"/>
            <p>{room.room}</p>
        </div>
    )
}