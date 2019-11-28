import React, { useState } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

const AdjustPanel = ({field, value, onAdjustValueChange}) => {
    const [inputValue, setInputValue] = useState(value);

    const onChange = val => {
        setInputValue(val);
        onAdjustValueChange(val, field);
    }

    return (
        <Row>
            <p>{field}</p>
            <Col span={20}>
                <Slider
                    min={0}
                    max={100}
                    onChange={onChange}
                    value={typeof inputValue === 'number' ? inputValue : 0}
                />
            </Col>
            <Col span={4}>
                <InputNumber
                    min={0}
                    max={100}
                    style={{ marginLeft: 16 }}
                    value={inputValue}
                    onChange={onChange}
                />
            </Col>
        </Row>
    )
}

export default AdjustPanel;