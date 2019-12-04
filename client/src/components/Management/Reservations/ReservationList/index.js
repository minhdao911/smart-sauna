import React from 'react';
import SingleReservation from './SingleReservation';
import * as moment from 'moment';

import './index.scss';

class ReservationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currReservations: []
        }
    }

    componentDidMount(){
        const { reservations } = this.props;
        let list = [];
        const currDate = moment();
        reservations.forEach(r => {
            const t = r.timeslot.split(' - ')[1].split(':');
            if(moment(r.date, "YYYY/MM/DD").hour(t[0]).minute(t[1]).isSameOrAfter(currDate)){
                list.push(r);
            }
        })
        this.setState({
            currReservations: list
        })
    }

    cancelReservation(id){
        const { currReservations } = this.state;
        const index = currReservations.indexOf(currReservations.find(r => r.id === id));
        if(index > -1){
            let updatedReservations = currReservations.slice();
            updatedReservations.splice(index, 1);
            this.setState({currReservations: updatedReservations});
        }
    }

    render(){
        const { currReservations } = this.state;
        return (
            <div className="reservations-container">
                {
                    currReservations.length > 0 && currReservations.map((r, index) => (
                        <SingleReservation key={index} reservation={r} cancelReservation={this.cancelReservation.bind(this)}/>
                    ))
                }
            </div>
        )
    }
}

export default ReservationList;