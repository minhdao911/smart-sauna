import React from 'react';
import { ResponsiveBar } from '@nivo/bar'

const InsightItem = ({data, barKey}) => {
    const d = data.map(r => {
        return {
            [barKey]: r.room[barKey],
            date: `${r.date} ${r.timeslot}`
        }
    });

    console.log(d);

    const avg = d.map(r => r[barKey]).reduce((acc, curr) => acc + curr, 0)/d.length;

    return (
        <>
            <div className="avg-info">
                <span>Average</span>
                <span>{(Math.round(avg * 100) / 100).toFixed(2)}°C</span>
            </div>
            <ResponsiveBar
                data={d}
                keys={[barKey]}
                indexBy="date"
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
                axisBottom={{
                    tickValues: d.map(dt => dt.date),
                    format: v => v.split(' ')[0]
                }}
                animate={false}
            />
        </>
    )
}

export default InsightItem;