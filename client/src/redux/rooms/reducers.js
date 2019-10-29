import types from './types';

const INITIAL_STATE = {
    data: [],
    isLoading: false,
}

const roomsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case types.REQUEST_ROOM_DATA: {
            return {
                ...state,
                isLoading: true,
            }
        }

        case types.RECEIVE_ROOM_DATA: {
            const { rooms } = action;
            return {
                data: rooms,
                isLoading: false,
            }
        }

        default: return state;
    }
}

export default roomsReducer;