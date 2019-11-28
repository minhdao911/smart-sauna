import React, { useState, useEffect } from 'react';
import { withAuthorization } from '../../shared/Session';
import { withFirebase } from '../../shared/Firebase';
import { compose } from 'recompose';
import Reservations from './Reservations'
import History from './History';
import Insights from './Insights';

import './index.scss';

const Management = ({authUser, firebase}) => {
  const [reservations, setReservations] = useState([]);
  useEffect(() => {
    firebase.reservations().orderBy('date', 'desc').get()
    .then(snapshot => {
      const userReservations = (snapshot.docs.filter(doc => doc.data().user.id === authUser.uid)).map(res => {
        return {
          id: res.id, 
          ...res.data()
        };
      })
      setReservations(userReservations);
    })
  }, []);

  return (
    <div className="management-layout">
      <div className="current">
        <Reservations reservations={reservations}/>
      </div>
      <div className="history">
        <History reservations={reservations}/>
      </div>
      <div className="insight">
        <Insights reservations={reservations}/>
      </div>
    </div>
  )
}

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  withAuthorization(condition),
)(Management);