import React from 'react';
import { Steps } from 'antd';

const { Step } = Steps;

export default function RSteps(props){
    const {current, steps} = props;
    return (
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
    )
}