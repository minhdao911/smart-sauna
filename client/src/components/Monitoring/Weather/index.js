import React, { Component } from 'react';
import { message } from 'antd';
import Clock from './Clock';

import './index.scss';

const APIkey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
export default class Weather extends Component {
    constructor(props){
        super(props);
        this.state = {
            temp: 0,
            weatherIcon: ''
        }
    }

    componentDidMount(){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Espoo,fi&units=metric&appid=${APIkey}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({temp: data.main.temp, weatherIcon: data.weather[0].icon});
        })
        .catch(err => {
            console.log(err);
            message.error("Can't get weather information");
        })
    }

    render(){
        const {temp, weatherIcon} = this.state;
        return (
            <div className="weather-container">
                <div className="weather">
                    <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="weather" />
                    <p>{temp}°C</p>
                </div>
                <div className="date-and-time">
                    <h3>{new Date().toLocaleDateString()}</h3>
                    <Clock />
                </div>
            </div>
        )
    }
}