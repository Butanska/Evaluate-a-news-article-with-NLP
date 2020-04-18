const dotenv = require('dotenv');
dotenv.config();

var path = require('path');

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

const bodyParser = require('body-parser');

//Configure express to use body-parser as middle-ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

//Require Aylien Text API
var aylien = require("aylien_textapi");

// set aylien API credentials
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });

// Initialize the dist folder
app.use(express.static('dist'));

//GET for displaying the dist/index.html
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

//Getting data from the Aylien API
app.post('/test', function(req, res) {
    let userInput = req.body.input.url;
    textapi.sentiment({
    'url': `${userInput}`,
    mode: 'document'
    }, function (error,response) {
    if (error === null) {
    console.log(response)
    res.send(response)
    }
    })
})

// Designate what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('App listening on port 8081!')
});