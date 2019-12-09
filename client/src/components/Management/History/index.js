import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import HistoryList from './HistoryList';

import './index.scss';

const History = ({reservations}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
        setIsLoading(false);
        }, 2000);
    })

    return (
        <>
            <div className="section-title">History</div>
            <div className="history-container">
                {reservations.length > 0 ? (
                    <HistoryList reservations={reservations}/>
                ) : (isLoading && <Spin />)
                }
            </div>
        </>
    )
}

export default History;