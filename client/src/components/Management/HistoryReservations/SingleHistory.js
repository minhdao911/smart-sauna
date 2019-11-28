import React from 'react';
import { Row, Col, Icon } from 'antd';

const SingleHistory = ({history}) => {
  return (
    <Row className="history-container">
      <Col span={18}>
        {history.room.name}&nbsp;&nbsp;&nbsp;
        <Icon type="clock-circle" /> {history.timeslot}&nbsp;&nbsp;&nbsp;
        <Icon type="calendar" /> {history.date}
      </Col>
      <Col span={3}>
      {history.room.temperature}
      </Col>
      <Col span={3}>
        {history.room.humidity}
      </Col>
    </Row>
  )
};

export default SingleHistory;