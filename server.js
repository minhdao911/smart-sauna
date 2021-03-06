const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const routes = require('./routes');
const initiateAxiosConfig = require('./axiosConfig');
const cors = require('cors');

if (process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config()
}

app.use(cors());

initiateAxiosConfig();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
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
    console.log('Listening on port ' + port);
});