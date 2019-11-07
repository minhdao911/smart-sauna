import React from 'react';
import { Calendar } from 'antd';

import './index.scss';

export default function RCalendar(props){
    const { updateChosenDate } = props;

    const onSelect = (date) => {
        updateChosenDate(new Date(date._d));
    }

    return (
        <div className="reservation-calendar">
            <Calendar fullscreen={false} onSelect={onSelect} />
        </div>
    )
}