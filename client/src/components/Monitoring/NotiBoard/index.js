import React from 'react';
import './index.scss';
import NotiItem from './NotiItem';

export default function Notification(){
    return (
        <div className="noti">
            <div className="noti-header">Notification</div>
            <NotiItem message="ok"/>
        </div>
    )
}