import React from 'react';
import * as moment from 'moment';
import './index.scss';

export default function NotiItem(props){
    const {time, description} = props.data;
    return (
        <div className="noti-item">
            <p>{moment(time).format('DD/MM/YYYY HH:mm')}</p>
            <p>{description}</p>
        </div>
    )
}