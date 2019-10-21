import React from 'react';
import './index.scss';

import ConditionItem from './ConditionItem';

export default function Condition(props){
    const {data} = props;
    return (
        <div className="condition">
            <ConditionItem label="Temperature" data={data.temp}/>
            <ConditionItem label="Humidity" data={data.humid}/>
        </div>
    )
}