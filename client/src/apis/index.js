let baseUrl = process.env.REACT_APP_DEV_SERVER;

if(process.env.NODE_ENV === 'production'){
    baseUrl = process.env.REACT_APP_PROD_SERVER;
}

const getRoomData = (room) => `${baseUrl}/get_room_data?room=${room}`;
const getTotalRooms = () => `${baseUrl}/get_total_rooms`;

export default {
    getRoomData,
    getTotalRooms,
}