import React, { useState } from 'react';
import { Modal, Button, Input, Spin } from 'antd';
import NotiItem from './NotiItem';
import './index.scss';

const { TextArea } = Input;

const Notification = ({list, isLoading, onNotiFormSubmit, isAdmin}) => {
    const [ modalVisible, setModalVisible ] = useState(false);
    const [ notiDesc, setNotiDesc ] = useState('');

    const showModal = () => {
        setModalVisible(true);
    };

    const handleSubmit = () => {
        onNotiFormSubmit(notiDesc);
        setModalVisible(false);
        setNotiDesc('');
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
                {isAdmin && <Button type="primary" shape="circle" icon="plus" onClick={showModal}/>}
            </div>
            <div className="noti-content">
                {isLoading ? <Spin /> : list.length > 0 && list.map((item, index) => <NotiItem key={index} data={item}/>)}
                <Modal
                    title="Notification Form"
                    visible={modalVisible}
                    onOk={handleSubmit}
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
        </div>
    )
}

export default Notification;