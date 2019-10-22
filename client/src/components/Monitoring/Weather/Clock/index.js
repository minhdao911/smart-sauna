import React, { useState, useEffect } from 'react';
import './index.scss';

export default function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        let timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
        return () => {
            clearInterval(timer);
        };
    })

    return <div className="time">{time}</div>
} 