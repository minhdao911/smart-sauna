import React, { useState } from 'react';
import { Button, Icon, Divider } from 'antd';
import AdjustPanelItem from './AdjustPanelItem';

import './index.scss';

const SingleReservation = ({reservation}) => {
  const {date, timeslot, room} = reservation;

  const [isAjust, setIsAdjust] = useState(false);

  const onAdjustBtnClick = () => {
    setIsAdjust(!isAjust);
  }

  return (
    <div className="reservation-item">
      <div className="basic-info">{`${room.name} ${timeslot} ${date}`}</div>
      <div className="condition-info">
        <div>
          <p><i className="fas fa-temperature-low"></i> {room.temperature}°C</p>
          <p><i className="fas fa-tint"></i> {room.humidity}%</p>
        </div>
        <Button type="primary" onClick={onAdjustBtnClick}>
          {isAjust ? (
            <span>Save <Icon type="up" /></span>
          ): (
            <span>Adjust <Icon type="down" /></span>
          )}
        </Button>
      </div>
      {
        isAjust && (
          <div class="adjust-panel">
            <Divider />
            <AdjustPanelItem title="Temperature" value={room.temperature}/>
            <AdjustPanelItem title="Humidity" value={room.humidity}/>
          </div>
        )
      }
      
    </div>
  )
};

export default SingleReservation;