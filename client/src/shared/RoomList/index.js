import React from 'react';
import { Spin } from 'antd';

import "antd/dist/antd.css";
import './index.scss'

import Room from './Room';

export default function RoomList(props){
    const {list, isLoading, updateChosenRoom, chosenRoom} = props;
    return (
        <Spin spinning={isLoading}>
            <div className="room-list">
                {
                    list.map((room, index) => {
                        return <Room key={index} room={room} updateChosenRoom={updateChosenRoom} chosenRoom={chosenRoom}/>
                    })
                }
            </div>
        </Spin>
    )
}