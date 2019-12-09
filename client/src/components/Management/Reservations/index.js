import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import ReservationList from './ReservationList';

const Reservations = ({reservations}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  })

  return (
    <>
      <div className="section-title">Your Reservations</div>
        {reservations.length > 0 ? (
          <ReservationList reservations={reservations} />
        )
        : (isLoading && <Spin />)}
    </>
  )
}

export default Reservations;