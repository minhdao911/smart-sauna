import React from 'react';
import HistoryReservations from './HistoryReservations'
import './index.scss';

const Management = () => {
  return (
    <div className="management-layout">
      <div className="current">
        <HistoryReservations/>
      </div>
      <div className="history">
        <HistoryReservations/>
      </div>
      <div className="insight">
        <HistoryReservations/>
      </div>
    </div>
  )
}

export default React.memo(Management)
