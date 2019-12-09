const axios = require('axios');
const fetch = require('node-fetch');

const getRoomData = async (req, res, next) => {
  const room = req.query.room;
  try {
    const saunaSeriesDataRes = await axios.get(`/api/iottimeseries/v3/timeseries/1904951b1c6740cdbe77bb0a9d5c86ee/${room}`)
    res.status(200).json({
      ...saunaSeriesDataRes.data[0],
      room,
    })
  } catch (err) {
    console.log(err)
    // console.log(err.response.status);
    // console.log(err.response.data);
    next(err);
  }
}

const getTotalRooms = async (req,res,next) => {
  try {
    const saunaSeriesDataRes = await axios.get(`/api/assetmanagement/v3/assettypes/mpamkdev.SaunaRooms`)
    res.status(200).json(saunaSeriesDataRes.data.aspects.map(aspect => {
      return {
        room: aspect.name
      }
    }))
  } catch (err) {
    console.log(err)
    // console.log(err.response.status);
    // console.log(err.response.data);
    next(err);
  }
}

const createEvent = async (req,res,next) => {
  try {
    const payload = {
      entityId: "1904951b1c6740cdbe77bb0a9d5c86ee",
      timestamp : new Date(Date.now()).toISOString(),
      description : req.body.description,
    }
    const eventRes = await axios.post(`/api/eventmanagement/v3/events`, payload)
    res.status(201).send(eventRes.data)
  } catch (err) {
    console.log(err)
    // console.log(err.response.status);
    // console.log(err.response.data);
    next(err);
  }
}

const getEvents = async (req,res,next) => {
  try {
    // Get all events from SmartSauna asset
    const encodedQuery = encodeURI(`${JSON.stringify({ entityId: "1904951b1c6740cdbe77bb0a9d5c86ee" })}`)
    const eventsRes = await axios.get(`/api/eventmanagement/v3/events?filter=${encodedQuery}`)
    const data = eventsRes.data["_embedded"] ? eventsRes.data["_embedded"].events.map(event => {
      return {
        id: event.id,
        time: event.timestamp,
        description: event.description,
      }
    }) : [];
    res.status(200).send(data)
  } catch (err) {
    console.log(err)
    // console.log(err.response.status);
    // console.log(err.response.data);
    next(err);
  }
}

const sendNotification = async (req, res, next) => {
  try {
    const payload = {
      to: req.body.receiverToken,
      notification: {
          title: 'Smart Sauna Notification',
          body: req.body.description
      }
    }
    const response = await fetch('https://fcm.googleapis.com/fcm/send', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Authorization': `key=${process.env.FCM_SERVER_TOKEN}`,
        'Content-Type': 'application/json'
      }
    })
    res.status(200).send(response);
  }catch(err){
    console.log(err);
    next(err);
  }
}


module.exports = {
  getRoomData,
  getTotalRooms,
  createEvent,
  getEvents,
  sendNotification,
}