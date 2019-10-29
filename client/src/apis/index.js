const getRoomData = (room) => `/get_room_data?room=${room}`;
const getTotalRooms = () => '/get_total_rooms';

export default {
    getRoomData,
    getTotalRooms,
}