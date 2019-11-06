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
            chosenRoom: '',
            intervalId: null,
        }
    }

    componentDidMount(){
        this.props.fetchRoomData();
        const intervalId = setInterval(() => {
            this.props.fetchRoomData();
        }, 30000);
        this.setState({intervalId});
    }

    componentDidUpdate(prevProps){
        const { rooms } = this.props;
        if(prevProps.rooms !== rooms){
            this.setState({
                chosenRoom: rooms[0]
            })
        }
    }

    componentWillUnmount(){
        clearInterval(this.state.intervalId);
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
                <div className="monitoring__div">
                    <RoomList list={rooms} isLoading={isLoading} updateChosenRoom={this.updateChosenRoom} chosenRoom={chosenRoom}/>
                    <Condition data={chosenRoom} isLoading={isLoading}/>
                </div>
                <div className="monitoring__div">
                    <Weather />
                    <NotiBoard />
                </div>
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