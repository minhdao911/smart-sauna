import React, { useState } from 'react';
import './index.scss';

import sampleData from '../../data.json';
import RoomList from '../../shared/RoomList';
import Condition from './Condition';
import Weather from './Weather';
import NotiBoard from './NotiBoard';

export default function Monitoring(){
    const [data, setData] = useState(sampleData);
    return (
        <div className="monitoring">
            <RoomList list={data}/>
            <Condition data={data[0]}/>
            {/* <div className="monitoring__sidebar">
                <Weather />
                <Notification />
            </div> */}
            <Weather />
            <NotiBoard />
        </div>
    )
}