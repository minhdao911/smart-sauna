import React, { useEffect, useState } from 'react';
import { Tabs, Spin } from 'antd';
import InsightItem from './InsightItem';

import './index.scss';

const { TabPane } = Tabs;

const Insights = ({reservations}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
        setIsLoading(false);
        }, 2000);
    })

    return (
        <>
            <div className="section-title">Insights</div>
            {
                reservations.length > 0 ? (
                    <Tabs 
                    defaultActiveKey="1" 
                    >
                        <TabPane tab="Temperature" key="1">
                            <InsightItem data={reservations} barKey="temperature"/>
                        </TabPane>
                        <TabPane tab="Humidity" key="2">
                            <InsightItem data={reservations} barKey="humidity"/>
                        </TabPane>
                    </Tabs>
                ) : (isLoading && <Spin/>)
            }
        </>
    )
}

export default Insights;