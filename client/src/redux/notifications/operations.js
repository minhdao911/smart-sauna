import actions from './actions';
import apis from '../../apis';

const FCMServerToken = process.env.REACT_APP_API_KEY;
const receiverToken = process.env.NODE_ENV === 'production' ? 
'' : 
'f_KI7GNhd1DFq9l0TfJRsF:APA91bHnBiXcVb55Y_TqiL85LZ3mbrGmY6SdXNYBYPutv6Z-1BfhtcWSwGPuYxg4j138tSYx0y-A79qjZSINZ7yApAprPZ5YQzj5LZSAelhCvrvf2y4Rs4lC0d6ZRCTcjAwGeGmzBHr5';

const sendNotificationAction = actions.sendNotification;
const receiveNotificationAction = actions.receiveNotification;
const requestNotiDataAction = actions.requestNotiData;
const receiveNotiDataAction = actions.receiveNotiData;

const createNotification = (description) => {
    return dispatch => {
        dispatch(sendNotificationAction());
        // fetch(apis.createEvent(), {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         description
        //     }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(res => res.json())
        // .then(res => {
        //     dispatch(receiveNotificationAction({description}))
            // fetch(apis.sendFCM(), {
            //     body: JSON.stringify({
            //         to: token,
            //         notification: {
            //             description
            //         }
            //     }),
            //     headers: {
            //         'Authentication': `key=${FCMServerToken}`,
            //         'Content-Type': 'application/json'
            //     }
            // })
            // .then(() => {
            //     dispatch(receiveNotificationAction(res))
            // })
        // })
        const headers = new Headers({
            "Access-Control-Allow-Origin": "*",
            "Authorization" : `key=${FCMServerToken}`,
            "Content-Type": "application/json"
        });

        fetch(apis.sendFCM(), {
            method: 'POST',
            body: JSON.stringify({
                to: receiverToken,
                notification: {
                    title: 'Smart Sauna Notification',
                    body: description
                }
            }),
            headers
        })
        .then((res) => {
            dispatch(receiveNotificationAction({description}))
        })
        .catch(err => {
            console.log('fcm error', err);
        })
    }
}

const fetchNotifications = () => {
    return dispatch => {
        dispatch(requestNotiDataAction());
        fetch(apis.getEvents())
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