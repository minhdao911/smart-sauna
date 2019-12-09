import types from './types';

const INITIAL_STATE = {
    roomData: [],
    isRoomLoading: false,
}

const roomsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case types.REQUEST_ROOM_DATA: {
            return {
                ...state,
                isRoomLoading: true,
            }
        }

        case types.RECEIVE_ROOM_DATA: {
            const { rooms } = action;
            return {
                roomData: rooms,
                isRoomLoading: false,
            }
        }

        default: return state;
    }
}

export default roomsReducer;