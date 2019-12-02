import React from 'react';
import { Tabs, Spin } from 'antd';
import InsightItem from './InsightItem';

import './index.scss';

const { TabPane } = Tabs;

const Insights = ({reservations}) => {
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
                ) : <Spin/>
            }
        </>
    )
}

export default Insights;