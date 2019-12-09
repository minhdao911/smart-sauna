import React, { useState } from 'react';
import { Modal, Button, Input, Spin } from 'antd';
import NotiItem from './NotiItem';
import './index.scss';

const { TextArea } = Input;

const Notification = ({list, isLoading, onNotiFormSubmit}) => {
    const [ modalVisible, setModalVisible ] = useState(false);
    const [ confirmLoading, setConfirmLoading ] = useState(false);
    const [ notiDesc, setNotiDesc ] = useState('');

    const showModal = () => {
        setModalVisible(true);
    };

    const handleSubmit = () => {
        onNotiFormSubmit(notiDesc);
        setConfirmLoading(true);
        setTimeout(() => {
            setConfirmLoading(false);
            setModalVisible(false);
        }, 1000);
    }

    const handleCancel = () => {
        setModalVisible(false);
    };

    const onDescChange = ({target}) => {
        setNotiDesc(target.value);
    }

    return (
        <div className="noti">
            <div className="noti-header">
                <p>Notification</p>
                <Button type="primary" shape="circle" icon="plus" onClick={showModal}/>
            </div>
            {isLoading ? <Spin /> : list.length > 0 && list.map((item, index) => <NotiItem key={index} data={item}/>)}
            <Modal
                title="Notification Form"
                visible={modalVisible}
                onOk={handleSubmit}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                okText="Send"
                >
                <p>Description:</p>
                <TextArea 
                    rows={4} 
                    value={notiDesc}
                    onChange={onDescChange}/>
            </Modal>
        </div>
    )
}

export default Notification;