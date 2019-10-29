import actions from './actions';
import apis from '../../apis';

const requestRoomDataAction = actions.requestRoomData;
const receiveRoomDataAction = actions.receiveRoomData;

const fetchRoomData = () => {
    return dispatch => {
        dispatch(requestRoomDataAction());
        fetch(apis.getTotalRooms())
        .then(res => res.json())
        .then(totalRooms => {
            const urls = totalRooms.map(d => apis.getRoomData(d.room));
            Promise.all(urls.map(url => 
                fetch(url)
                .then(res => res.json())
            ))
            .then(rooms => {
                dispatch(receiveRoomDataAction(rooms))
            })
        })
    }
}

export default {
    fetchRoomData,
}