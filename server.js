/**
 * Created by Fabian Tschullik on 02.07.2016.
 */
/**
 * Created by Fabian Tschullik on 01.07.2016.
 */
var express = require('express');
var app = express();
var mongoose =require('mongoose');
require('./models/actWeather.js');
require('./db.js');
var bodyParser = require('body-parser');
var weatherAPI = require('./weatherAPI.js');
var Weather = mongoose.model('Weather');




app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());



//Gets the actual weather Data


    app.get('/dashboard', function(req, res){

        console.log("I received a GET request");

        weatherAPI.getActualWeather(function (result) {

            res.json(result);

        });










    });






app.listen(3000);
console.log("Server is running on Port 3000");