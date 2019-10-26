const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios')
const app = express();
const port = process.env.PORT || 5000;
const routes = require('./routes');
const { updateSeriesData } = require('./utils')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    // res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// routes
app.use('/',routes)

// Errors handling middleware
app.use((error,req,res,next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message:message})
});


app.listen(port, () => {
    // setInterval(() => {
    //     updateSeriesData()
    // }, 30000)
    refreshToken()
    console.log('Listening on port ' + port);
});