import React from 'react';


const SingleHistory = ({history}) => {
  return (
    <>
      <div>
        {history.room.name} | {history.timeslot} | {history.date}      {history.room.temperature}   {history.room.humidity}
      </div>
    </>
  )
};

export default SingleHistory;