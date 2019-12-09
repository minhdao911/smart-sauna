import { combineReducers } from 'redux';

import roomsReducer from '../rooms';
import notificationsReducer from '../notifications';

const rootReducer = combineReducers({
    rooms: roomsReducer,
    notifications: notificationsReducer,
})

export default rootReducer;