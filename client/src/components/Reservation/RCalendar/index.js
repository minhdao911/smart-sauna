import React from 'react';
import { Calendar } from 'antd';
import * as moment from 'moment';

import './index.scss';

export default function RCalendar(props){
    const { updateChosenDate } = props;

    const onSelect = (date) => {
        updateChosenDate(moment(date._d).format("DD/MM/YYYY"));
    }

    return (
        <div className="reservation-calendar">
            <Calendar 
                fullscreen={false} 
                onSelect={onSelect} 
                validRange={[moment(), moment().endOf('month')]}/>
        </div>
    )
}