import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, message, Icon } from 'antd';
import RSteps from './RSteps';
import RoomList from '../../shared/RoomList';
import { roomsOperations } from '../../redux/rooms';

import './index.scss'
import RCalendar from './RCalendar';
import RTimeSlot from './RTimeSlot';

export default function Reservation(){
    const steps = [
        {
          title: 'Choose room',
        },
        {
          title: 'Date',
        },
        {
          title: 'Time',
        },
        {
            title: 'Done',
        },
    ];
    const rooms = useSelector(state => state.rooms.data);
    const dispatch = useDispatch();
    const [current, setCurrent] = useState(0);
    const [chosenRoom, setChosenRoom] = useState('');
    const [chosenDate, setChosenDate] = useState(new Date());
    const [chosenTime, setChosenTime] = useState('');

    useEffect(() => {
        if(rooms.length === 0){
            dispatch(roomsOperations.fetchRoomData());
        }
    })

    const next = () => {
        switch(current){
            case 0: {
                if(!chosenRoom)
                    message.error('Room is not chosen');
                else
                    setCurrent(current + 1);
                break;
            }
            case 1: {
                if(!chosenDate)
                    message.error('Date is not chosen');
                else
                    setCurrent(current + 1);
                break;
            }
            default: 
                setCurrent(current + 1);
                break;
        }
    }

    const updateChosenRoom = (newRoom) => {
        setChosenRoom(newRoom);
    }

    const updateChosenDate = (date) => {
        setChosenDate(date);
    }

    const updateChosenTime = (time) => {
        setChosenTime(time);
    }

    const reserve = () => {
        if(!chosenTime)
            message.error('Time slot is not chosen');
        else{
            const reservedData = {
                room: chosenRoom,
                date: `${chosenDate.getDate()}/${chosenDate.getMonth()}/${chosenDate.getFullYear()}`,
                timeslot: chosenTime
            }
            console.log(reservedData);
            setCurrent(current + 1);
            message.success('Processing complete!');
        }
    }

    return (
        <div className="reservation">
            <RSteps current={current} steps={steps}/>
            {current === 0 && (
                <div className="steps-content">
                    <RoomList 
                        list={rooms} 
                        isLoading={rooms.length > 0 ? false : true} 
                        updateChosenRoom={updateChosenRoom}
                        chosenRoom={chosenRoom}/>
                </div>
            )}
            {current === 1 && (
                <div className="steps-content">
                    <RCalendar updateChosenDate={updateChosenDate}/>
                </div>
            )}
            {current === 2 && (
                <div className="steps-content">
                    <RTimeSlot updateChosenTime={updateChosenTime}/>
                </div>
            )}
            {current === 3 && (
                <div className="steps-content">
                    <h2>Reservation <span style={{color: '#429e33'}}>success</span>!</h2>
                    <p style={{fontSize: '1.1em'}}>Go to <Link to="/management">Management</Link> for more information</p>
                </div>
            )}
            <div className="steps-action">
                {(current > 0 && current !== steps.length - 1) && (
                    <Button onClick={() => setCurrent(current - 1)}>
                        <Icon type="arrow-left" />
                    </Button>
                )}
                {current < steps.length - 2 && (
                    <Button type="primary" onClick={next}>
                        <Icon type="arrow-right" />
                    </Button>
                )}
                {current === steps.length - 2 && (
                    <Button type="primary submit" onClick={reserve}>
                        Book
                    </Button>
                )}
            </div>
        </div>
    )
}