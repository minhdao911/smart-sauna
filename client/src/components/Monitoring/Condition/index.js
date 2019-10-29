import React from 'react';
import './index.scss';

import ConditionItem from './ConditionItem';

export default function Condition(props){
    const {data} = props;
    return (
        <div className="condition">
            <ConditionItem label="Temperature" data={data ? data.temperature : 0}/>
            <ConditionItem label="Humidity" data={data ? data.humidity : 0}/>
        </div>
    )
}