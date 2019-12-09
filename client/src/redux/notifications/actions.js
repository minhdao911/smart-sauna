import types from './types';

const sendNotification = () => {
    return {
        type: types.SEND_NOTIFICATION
    }
};

const receiveNotification = (notification) => {
    return {
        type: types.RECEIVE_NOTIFICATION,
        notification
    }
}

const requestNotiData = () => {
    return {
        type: types.REQUEST_NOTIFICATIONS
    }
}

const receiveNotiData = (notifications) => {
    return {
        type: types.RECEIVE_NOTIFICATIONS,
        notifications
    }
};

export default {
    sendNotification,
    receiveNotification,
    requestNotiData,
    receiveNotiData,
}