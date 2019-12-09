import types from './types';

const INITIAL_STATE = {
    notiData: [],
    isNotiLoading: false,
}

const notificationsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case types.SEND_NOTIFICATION: {
            return {
                ...state,
                isNotiLoading: true,
            }
        }

        case types.RECEIVE_NOTIFICATION: {
            const { notification } = action;
            const oldNotiData = state.notiData.slice();
            return {
                notiData: [...oldNotiData, notification],
                isNotiLoading: false,
            }
        }

        case types.REQUEST_NOTIFICATIONS: {
            return {
                ...state,
                isNotiLoading: true,
            }
        }

        case types.RECEIVE_NOTIFICATIONS: {
            const { notifications } = action;
            return {
                notiData: notifications,
                isNotiLoading: false,
            }
        }

        default: return state;
    }
}

export default notificationsReducer;