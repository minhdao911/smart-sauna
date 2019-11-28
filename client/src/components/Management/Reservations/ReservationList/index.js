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
            if(moment(r.date, "DD/MM/YYYY").isSameOrAfter(currDate)){
                list.push(r);
            }
        })
        this.setState({
            currReservations: list
        })
    }

    render(){
        const { currReservations } = this.state;
        return (
            <div className="reservations-container">
                {
                    currReservations.length > 0 && currReservations.map((r, index) => (
                        <SingleReservation key={index} reservation={r}/>
                    ))
                }
            </div>
        )
    }
}

export default ReservationList;