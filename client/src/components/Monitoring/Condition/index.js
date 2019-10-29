import React from 'react';
import { Spin } from 'antd';

import "antd/dist/antd.css";
import './index.scss';

import ConditionItem from './ConditionItem';

export default function Condition(props){
    const {data, isLoading} = props;
    return (
        <Spin spinning={isLoading}>
            <div className="condition">
                <ConditionItem label="Temperature" data={data ? data.temperature : 0}/>
                <ConditionItem label="Humidity" data={data ? data.humidity : 0}/>
            </div>
        </Spin>
    )
}