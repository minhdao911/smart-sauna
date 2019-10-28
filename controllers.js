const axios = require('axios');

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

module.exports = {
  getRoomData,
  getTotalRooms
}