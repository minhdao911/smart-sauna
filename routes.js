const express = require('express')
const router = express.Router()
const { getRoomData, getTotalRooms } = require('./controllers')


router.get('/get_room_data', getRoomData)
router.get('/get_report_data', getRoomData)
router.get('/get_total_rooms', getTotalRooms)


module.exports = router;