import React, { useState } from 'react';
import { Button, Icon, Divider, message } from 'antd';
import { withFirebase } from '../../../../../shared/Firebase';
import AdjustPanelItem from './AdjustPanelItem';
import * as moment from 'moment';

import './index.scss';

const SingleReservation = ({reservation, firebase}) => {
  const {date, timeslot, room} = reservation;

  const [isAdjust, setIsAdjust] = useState(false);
  const [temp, setTemp] = useState(room.temperature);
  const [humidity, setHumidity] = useState(room.humidity);

  const onAdjustBtnClick = () => {
    setIsAdjust(!isAdjust);
    if(isAdjust){
      if(temp !== room.temperature || humidity !== room.humidity){
        firebase.reservation(reservation.id).update({
          room: {
            temperature: temp,
            humidity,
            name: room.name
          }
        }).then(res => {
          message.success('Temperature and Humidity updated');
          room.temperature = temp;
          room.humidity = humidity;
        }).catch(err => {
          console.log(err);
          message.error('Can not update new temperature and humidity!');
        })
      }
    }
  }

  const onAdjustValueChange = (newValue, field) => {
    if(field === 'Temperature') setTemp(newValue);
    else setHumidity(newValue);
  }

  const isBtnAvailable = () => {
    const timeArr = timeslot.split(' - ');
    const t1 = timeArr[0].split(':')[0];
    return moment(date, "YYYY/MM/DD").hour(Number(t1)) <= moment().add(10, 'minutes');
  }

  return (
    <div className="reservation-item">
      <div className="basic-info">{`${room.name} ${timeslot} ${date}`}</div>
      <div className="condition-info">
        <div>
          <p>
            <i className="fas fa-temperature-low"></i> 
            {isAdjust ? room.temperature : temp}°C
          </p>
          <p>
            <i className="fas fa-tint"></i> 
            {isAdjust ? room.humidity : humidity}%
          </p>
        </div>
        <Button type="primary" onClick={onAdjustBtnClick} disabled={!isBtnAvailable()}>
          {isAdjust ? (
            <span>Save <Icon type="up" /></span>
          ): (
            <span>Adjust <Icon type="down" /></span>
          )}
        </Button>
      </div>
      {
        isAdjust && (
          <div className="adjust-panel">
            <Divider />
            <AdjustPanelItem 
              field="Temperature" 
              value={room.temperature} 
              onAdjustValueChange={onAdjustValueChange}/>
            <AdjustPanelItem 
              field="Humidity" 
              value={room.humidity}
              onAdjustValueChange={onAdjustValueChange}/>
          </div>
        )
      }
    </div>
  )
};

export default withFirebase(SingleReservation);