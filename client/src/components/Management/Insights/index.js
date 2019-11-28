import React, { Component } from 'react';
import { Tabs, Spin } from 'antd';
import InsightBar from './InsightBar';

import './index.scss';

const { TabPane } = Tabs;

class Insights extends Component {
    constructor(props){
        super(props);
        this.state = {
            tempData: [],
            avgTemp: 0,
            humidityData: [],
            avgHumidity: 0
        }
    }

    componentDidMount(){
        setTimeout(() => {
            let temps = [];
            let huds = [];
            let tempCount = 0;
            let hudCount = 0;
            this.props.reservations.length > 0 && this.props.reservations.forEach(r => {
                temps.push({
                    temperature: r.room.temperature,
                    date: r.date
                })
                tempCount += r.room.temperature;
                huds.push({
                    humidity: r.room.humidity,
                    date: r.date
                })
                hudCount += r.room.humidity;
            })
            this.setState({
                tempData: temps,
                avgTemp: tempCount/temps.length,
                humidityData: huds,
                avgHumidity: hudCount/huds.length
            })
        }, 2500)
    }

    render(){
        const { tempData, avgTemp, humidityData, avgHumidity } = this.state;
        return (
        <>
            <div className="section-title">Insights</div>
            {
                this.props.reservations.length > 0 ? (
                    <Tabs 
                    defaultActiveKey="1" 
                    >
                        <TabPane tab="Temperature" key="1">
                            <div className="avg-info">
                                <span>Average</span>
                                <span>{avgTemp}°C</span>
                            </div>
                            <InsightBar data={tempData} barKey="temperature"/>
                        </TabPane>
                        <TabPane tab="Humidity" key="2">
                            <div className="avg-info">
                                <span>Average</span>
                                <span>{avgHumidity}%</span>
                            </div>
                            <InsightBar data={humidityData} barKey="humidity"/>
                        </TabPane>
                    </Tabs>
                ) : <Spin/>
            }
        </>
        )
    }
}

export default Insights;