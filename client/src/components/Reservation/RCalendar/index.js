import React, { useState, useEffect } from 'react';
import { Calendar, Spin, Badge } from 'antd';
import { withFirebase } from '../../../shared/Firebase';
import * as moment from 'moment';

import './index.scss';

const RCalendar = ({updateChosenDate, firebase}) => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        firebase.reservations().orderBy('date', 'desc').get()
        .then(snapshot => {
            const allReservations = snapshot.docs.map(res => res.data());
            setReservations(allReservations);
        })
    }, []);

    const dateCellRender = (value) => {
        if(value >= moment().startOf('date') && value <= moment().endOf('month')){
            let d = reservations.filter(r => value.format("YYYY/MM/DD") === r.date);
            if(d.length > 0){
                return (
                    <Badge status={getDateStatus(d.length)} />
                )
            }
            return <Badge status="success" />
        }
        return null;
    }

    const getDateStatus = (num) => {
        if(num < 10) return 'success';
        else if(num < 14) return 'warning';
        else return 'error';
    }

    const onSelect = (date) => {
        updateChosenDate(moment(date._d).format("YYYY/MM/DD"));
    }

    return (
        <div className="reservation-calendar">
            {reservations.length > 0 ? (
                <Calendar 
                    fullscreen={false} 
                    onSelect={onSelect} 
                    dateCellRender={dateCellRender}
                    validRange={[moment(), moment().endOf('month')]}/>
            ) : <Spin />}
        </div>
    )
}

export default withFirebase(RCalendar);