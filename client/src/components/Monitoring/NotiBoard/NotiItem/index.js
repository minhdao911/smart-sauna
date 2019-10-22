import React from 'react';
import './index.scss';

export default function NotiItem(props){
    const {message} = props;
    return (
        <div className="noti-item">
            {message}
        </div>
    )
}