import React, { Component } from 'react';
import './index.scss';

import { connect } from 'react-redux';
import { roomsOperations } from '../../redux/rooms';

import RoomList from '../../shared/RoomList';
import Condition from './Condition';
import Weather from './Weather';
import NotiBoard from './NotiBoard';

class Monitoring extends Component{

    componentDidMount(){
        this.props.fetchRoomData();
    }

    render(){
        const { rooms, isLoading } = this.props;
        return (
            <div className="monitoring">
                <RoomList list={rooms}/>
                <Condition data={rooms[0]}/>
                <Weather />
                <NotiBoard />
            </div>
        )
    }
}

const mapStateToProps = ({rooms}) => {
    const { data, isLoading } = rooms;
    return {
      rooms: data,
      isLoading
    };
  };
  
  const mapDispatchToProps = dispatch => {
    const fetchRoomData = () => dispatch(roomsOperations.fetchRoomData());

    return { fetchRoomData };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Monitoring);