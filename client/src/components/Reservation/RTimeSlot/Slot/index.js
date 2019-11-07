import React from 'react';
import { Checkbox } from 'antd';

import './index.scss';

export default function Slot(props){
    const {time, info, disabled, selected, updateSelectedSlot} = props;

    const onChange = (e) => {
        if(e.target.checked){
            updateSelectedSlot(time);
        }
    }

    return (
        <div className={`slot ${selected === time ? 'selected' : ''}`}>
            <div className="slot-time">
                <span>{time}</span>
                {info}
            </div>
            <Checkbox 
                onChange={onChange} 
                disabled={disabled} 
                checked={selected === time}/>
        </div>
    )
}