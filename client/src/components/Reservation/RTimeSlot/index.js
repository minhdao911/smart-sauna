import React, { useState } from 'react';
import Slot from './Slot';

import './index.scss';

export default function RTimeSlot(props){
    const { updateChosenTime } = props;
    const [timeslot, setTimeslot] = useState('');
    const generateTimeSlot = () => {
        let slots = [];
        for(let i=7; i<23; i++){
            slots.push(`${i}:00 - ${i+1}:00`);
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
                    key={slot} 
                    time={slot} 
                    info="Vacant" 
                    disabled={false} 
                    selected={timeslot}
                    updateSelectedSlot={updateSelectedSlot}/>
            ))}
        </div>
    )
}