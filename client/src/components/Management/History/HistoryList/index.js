import React from 'react';
import SingleHistory from './SingleHistory';
import * as moment from 'moment';

class HistoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pastReservations: []
        }
    }

    componentDidMount(){
        const { reservations } = this.props;
        let list = [];
        const currDate = moment();
        reservations.forEach(r => {
            if(moment(r.date, "YYYY/MM/DD").isBefore(currDate)){
                list.push(r);
            }
        })
        this.setState({
            pastReservations: list
        })
    }

    render(){
        const { pastReservations } = this.state;
        return (
            <div className="reservations-container">
                {
                    pastReservations.length > 0 && pastReservations.map((r, index) => (
                        <SingleHistory key={index} reservation={r}/>
                    ))
                }
            </div>
        )
    }
}

export default HistoryList;