import React, { Component } from 'react';
import SingleReservation from './SingleReservation';
import { Spin } from 'antd';
import * as moment from 'moment';

class Reservations extends Component {
  constructor(props){
    super(props);
    this.state = {
      currReservations: []
    }
  }

  componentDidMount(){
    setTimeout(() => {
      let list = [];
      const currDate = moment();
      this.props.reservations.length > 0 && this.props.reservations.forEach(r => {
        if(moment(r.date, "DD/MM/YYYY") >= currDate)
          list.push(r);
      })
      this.setState({
        currReservations: list
      })
    }, 2500)
  }

  render(){
    const { currReservations } = this.state;
    const { reservations } = this.props;
    return (
    <>
      <div className="section-title">Your Reservations</div>
      <div className="reservations-container">
        {reservations.length > 0 ? 
          <>
            {
              currReservations.length > 0 && currReservations.map((reservation, index) => {
                return <SingleReservation key={index} reservation={reservation}/>
              })
            }
          </>
          : <Spin/>}
      </div>
    </>
    )
  }
}

export default Reservations;