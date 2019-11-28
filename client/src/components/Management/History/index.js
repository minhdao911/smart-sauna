import React from 'react';
import { Spin } from 'antd';
import HistoryList from './HistoryList';

import './index.scss';

const History = ({reservations}) => {
    return (
        <>
            <div className="section-title">History</div>
            <div className="history-container">
                {reservations.length > 0 ? (
                    <HistoryList reservations={reservations}/>
                ) : <Spin/>
                }
            </div>
        </>
    )
}

export default History;