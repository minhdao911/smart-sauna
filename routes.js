const express = require('express')
const router = express.Router()
const { getRoomData } = require('./controllers')


router.get('/get_room_data', getRoomData)
router.get('/get_report_data', getRoomData)


module.exports = router;