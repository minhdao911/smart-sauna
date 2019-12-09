import actions from './actions';
import apis from '../../apis';

const receiverToken = process.env.NODE_ENV === 'production' ? 
'ciSYixiDUKAZ7tCJCZx27h:APA91bGCNDbFgRhh4fy2EHY_ehfxFgnqLMYekxodH-vkw3w4sj7zrhRvbLH3ThfpetN_oibIPrGrofw0XkE6-qb_5IICDuPrj9wT9LFvDiwYdGkocP9BUdttxmEe8PQvvXG_wY1C4m3W' : 
'f_KI7GNhd1DFq9l0TfJRsF:APA91bHnBiXcVb55Y_TqiL85LZ3mbrGmY6SdXNYBYPutv6Z-1BfhtcWSwGPuYxg4j138tSYx0y-A79qjZSINZ7yApAprPZ5YQzj5LZSAelhCvrvf2y4Rs4lC0d6ZRCTcjAwGeGmzBHr5';

const CODE = process.env.NODE_ENV === 'production' ? '123' : '2'; 

const sendNotificationAction = actions.sendNotification;
const receiveNotificationAction = actions.receiveNotification;
const requestNotiDataAction = actions.requestNotiData;
const receiveNotiDataAction = actions.receiveNotiData;

const createNotification = (description) => {
    return dispatch => {
        dispatch(sendNotificationAction());
        fetch(apis.createEvent(), {
            method: 'POST',
            body: JSON.stringify({
                description,
                code: CODE
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => {
            fetch(apis.sendNotification(), {
                method: 'POST',
                body: JSON.stringify({
                    receiverToken,
                    description
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(() => {
                dispatch(receiveNotificationAction({
                    time: res.timestamp,
                    description: res.description
                }))
            })
        })
    }
}

const fetchNotifications = () => {
    return dispatch => {
        dispatch(requestNotiDataAction());
        fetch(apis.getEvents(CODE))
        .then(res => res.json())
        .then(notifications => {
            dispatch(receiveNotiDataAction(notifications))
        })
    }
}

export default {
    createNotification,
    fetchNotifications,
}