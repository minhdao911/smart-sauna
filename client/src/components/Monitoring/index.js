import React, { Component } from 'react';
import './index.scss';

import { connect } from 'react-redux';
import { roomsOperations } from '../../redux/rooms';

import RoomList from '../../shared/RoomList';
import Condition from './Condition';
import Weather from './Weather';
import NotiBoard from './NotiBoard';

class Monitoring extends Component{
    constructor(props){
        super(props);
        this.state = {
            chosenRoom: '' 
        }
    }

    componentDidMount(){
        this.props.fetchRoomData();
    }

    componentDidUpdate(prevProps){
        const { rooms } = this.props;
        if(prevProps.rooms !== rooms){
            this.setState({
                chosenRoom: rooms[0]
            })
        }
    }

    updateChosenRoom = (newRoom) => {
        this.setState({
            chosenRoom: newRoom
        })
    }

    render(){
        const { rooms, isLoading } = this.props;
        const { chosenRoom } = this.state;
        return (
            <div className="monitoring">
                <RoomList list={rooms} isLoading={isLoading} updateChosenRoom={this.updateChosenRoom} chosenRoom={chosenRoom}/>
                <Condition data={chosenRoom} isLoading={isLoading}/>
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