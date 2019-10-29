import types from './types';

const requestRoomData = () => {
    return {
        type: types.REQUEST_ROOM_DATA
    }
};

const receiveRoomData = (rooms) => {
    return {
        type: types.RECEIVE_ROOM_DATA,
        rooms
    }
};

export default {
    requestRoomData,
    receiveRoomData,
}