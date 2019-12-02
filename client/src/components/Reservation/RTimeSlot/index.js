import React, { useState, useEffect } from 'react';
import Slot from './Slot';
import { withFirebase } from '../../../shared/Firebase';

import './index.scss';

const RTimeSlot = ({updateChosenTime, chosenDate, chosenRoom, firebase}) => {
    const [timeslot, setTimeslot] = useState('');
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        firebase.reservations().orderBy('date', 'desc').get()
        .then(snapshot => {
            const allReservations = snapshot.docs.map(res => res.data()).filter(
                r => r.date === chosenDate
            );
            setReservations(allReservations);
        })
    }, []);

    const generateTimeSlot = () => {
        let slots = [];
        for(let i=7; i<24; i++){
            const ts = `${i}:00 - ${i}:50`;
            const isReserved = reservations.length > 0 && reservations.find(
                r => r.room.name === chosenRoom.room && r.timeslot === ts
            );
            if(isReserved){
                slots.push({
                    timeslot: ts,
                    info: 'Reserved',
                    available: false
                });
            }else{
                slots.push({
                    timeslot: ts,
                    info: 'Vacant',
                    available: true
                });
            }
        }
        return slots;
    }

    const updateSelectedSlot = (time) => {
        setTimeslot(time);
        updateChosenTime(time);
    }

    return (
        <div className="timeslot">
            {generateTimeSlot().map(slot => (
                <Slot 
                    key={slot.timeslot} 
                    time={slot.timeslot} 
                    info={slot.info} 
                    disabled={!slot.available} 
                    selected={timeslot}
                    updateSelectedSlot={updateSelectedSlot}/>
            ))}
        </div>
    )
}

export default withFirebase(RTimeSlot);