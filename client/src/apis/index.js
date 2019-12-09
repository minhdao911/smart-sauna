let baseUrl = process.env.REACT_APP_DEV_SERVER;

if(process.env.NODE_ENV === 'production'){
    baseUrl = process.env.REACT_APP_PROD_SERVER;
}

const getRoomData = (room) => `${baseUrl}/get_room_data?room=${room}`;
const getTotalRooms = () => `${baseUrl}/get_total_rooms`;

const createEvent = () => `${baseUrl}/create_event`;
const getEvents = (code) => `${baseUrl}/get_events?code=${code}`;

const sendNotification = () => `${baseUrl}/send_notification`;

export default {
    getRoomData,
    getTotalRooms,
    createEvent,
    getEvents,
    sendNotification,
}