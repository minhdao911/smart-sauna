import React, { useState, useEffect } from 'react';
import './index.scss';

export default function Weather(){
    const APIkey = '3a82723d74d085caf9251c70f3b91146';
    const [temp, setTemp] = useState(0);
    const [weatherIcon, setWeatherIcon] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Espoo,fi&units=metric&appid=${APIkey}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setTemp(data.main.temp);
            setWeatherIcon(`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
        })
    })

    return (
        <div className="weather">
            <img src={weatherIcon} />
            <p>{temp}°C</p>
            {new Date().toLocaleDateString('en-GB')}
            {time}
            {/* {setInterval(() => {
                setTime(new Date().toLocaleTimeString('en-GB'))
            }, 1000)}bnm */}
        </div>
    )
}