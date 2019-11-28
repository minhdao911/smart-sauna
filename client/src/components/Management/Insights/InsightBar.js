import React from 'react';
import { ResponsiveBar } from '@nivo/bar'

const InsightBar = ({data, barKey}) => (
    <ResponsiveBar
        // width={500}
        // height={280}
        data={data}
        keys={[ barKey ]}
        indexBy= 'date'
        margin={{ top: 10, right: 10, bottom: 120, left: 60 }}
        padding={0.3}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: barKey === 'temperature' ? '°C' : "%",
            legendPosition: 'middle',
            legendOffset: -40
        }}
        animate={false}
    />
)

export default InsightBar;