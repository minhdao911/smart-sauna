import React from 'react';
import { Spin } from 'antd';
import SingleHistory from './SingleHistory';

import './index.scss';

const History = ({reservations}) => {
    return (
        <>
            <div className="section-title">History</div>
            <div className="history-container">
                {reservations.length > 0 ? reservations.map((reservation, index) => {
                    return <SingleHistory key={index} reservation={reservation} />
                }) : <Spin/>
                }
            </div>
        </>
    )
}

export default History;