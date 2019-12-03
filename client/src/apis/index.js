const baseUrl = 'https://smart-sauna-server.herokuapp.com'

const getRoomData = (room) => `${baseUrl}/get_room_data?room=${room}`;
const getTotalRooms = () => `${baseUrl}/get_total_rooms`;

export default {
    getRoomData,
    getTotalRooms,
}