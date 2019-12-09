const express = require('express')
const router = express.Router()
const { getRoomData, getTotalRooms, createEvent, getEvents, sendNotification } = require('./controllers')


router.get('/get_room_data', getRoomData)
router.get('/get_report_data', getRoomData)
router.get('/get_total_rooms', getTotalRooms)
router.post('/create_event', createEvent)
router.get('/get_events', getEvents)
router.post('/send_notification', sendNotification)

module.exports = router;