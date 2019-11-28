import React from 'react';
import { Spin } from 'antd';
import ReservationList from './ReservationList';

const Reservations = ({reservations}) => {
  return (
    <>
      <div className="section-title">Your Reservations</div>
        {reservations.length > 0 ? (
          <ReservationList reservations={reservations} />
        )
        : <Spin/>}
    </>
  )
}

export default Reservations;