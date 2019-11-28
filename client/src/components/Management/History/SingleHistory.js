import React from 'react';

const SingleHistory = ({reservation}) => {
    const { date, timeslot, room } = reservation;

    return (
        <div className="history-item">
            <div className="basic-info">
                {`${room.name} ${timeslot} ${date}`}
            </div>
            <div className="condition-info">
                <p><i className="fas fa-temperature-low"></i> {room.temperature}°C</p>
                <p><i className="fas fa-tint"></i> {room.humidity}%</p>
            </div>
        </div>
    )
}

export default SingleHistory;