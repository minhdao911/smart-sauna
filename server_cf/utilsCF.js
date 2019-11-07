const axios = require('axios');

const simulateSaunaSeriesData = (setName, temperature) => {
  // generate simulated humidity
  const simulatedHumidity = Math.floor(Math.random() * (50 - 20 + 1)) + 20;

  // generate simuated temperature
  const randomTempMultiplier = Math.random() * (3.6 - 3) + 3;
  const simulatedTemperature = Math.floor(temperature * randomTempMultiplier)

  return {
    entityId: "1904951b1c6740cdbe77bb0a9d5c86ee",
    propertySetName: setName,
    data : [{
      _time: new Date(Date.now()).toISOString(),
      temperature: simulatedTemperature,
      humidity: simulatedHumidity
    }]
  }
}

const updateSeriesData = async () => {
  try {

    // Get latest temperature data from room C404 in DerbyRooms
    const derbyDataRes = await axios.get('/api/iottimeseries/v3/timeseries/b7c44c4ca4e845f881c4b1d9b7961a45/C404')
    // Simulate sauna data
    const saunaRoom1SeriesData = simulateSaunaSeriesData('SaunaRoom1', derbyDataRes.data[0].temperature)
    const saunaRoom2SeriesData = simulateSaunaSeriesData('SaunaRoom2', derbyDataRes.data[0].temperature)
    const saunaRoom3SeriesData = simulateSaunaSeriesData('SaunaRoom3', derbyDataRes.data[0].temperature)
    const saunaRoom4SeriesData = simulateSaunaSeriesData('SaunaRoom4', derbyDataRes.data[0].temperature)
    // Update sauna data to assets SmartSauna
    const seriesDataPayload = {
      timeseries: [saunaRoom1SeriesData, saunaRoom2SeriesData, saunaRoom3SeriesData, saunaRoom4SeriesData]
    }
    await axios.put('/api/iottimeseries/v3/timeseries', seriesDataPayload)
  } catch (err){
      // console.log(err.response.status)
      // console.log(err.response.data)
      console.log(err)
  }
}

module.exports = {
  simulateSaunaSeriesData,
  updateSeriesData,
}