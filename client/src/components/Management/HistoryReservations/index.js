import React, { useState, useEffect } from 'react';
import SingleHistory from './SingleHistory';
import { withAuthorization } from '../../../shared/Session';
import { withFirebase } from '../../../shared/Firebase';
import { compose } from 'recompose';
import { Spin } from 'antd';
import './index.scss';


const HistoryReservations = ({authUser, firebase}) => {
  const [historyReservations, setHistoryReservations] = useState([]);
  useEffect(() => {
    firebase.reservations().get()
    .then(snapshot => {
      const userHistoryReservations = (snapshot.docs.filter(doc => doc.data().user.id === authUser.uid)).map(history => history.data())
      setHistoryReservations(userHistoryReservations)
    })
  },[]);

  return (
    <>
      <div className="section-title">History</div>
        {
          historyReservations.length > 0 ? historyReservations.map((history, index) => {
            return <SingleHistory key={index} history={history}/>
          }) : <Spin/>
        }
    </>

  )
};

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  withAuthorization(condition),
)(HistoryReservations);