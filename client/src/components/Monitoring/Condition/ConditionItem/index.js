import React from 'react';
import './index.scss';

export default function ConditionItem(props) {
    const {data, label} = props;

    return (
        <div className="condition-item">
            <p>{label}</p>
            <svg viewBox="0 0 36 36" className="condition-item-chart orange">
                <path className="circle-bg"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className="circle"
                    strokeDasharray={`${data}, 100`}
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.5" className="percentage">{data + (label === 'Temperature' ? '°C' : '%')}</text>
            </svg>
        </div>
    )
}