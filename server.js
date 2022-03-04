var express = require('express')
const mongodb = require("mongodb").MongoClient;
var app = express()

// Requiring mongo.js so it runs with the index app
require('./mongo.js');
// require('./discord.js');

// Initiating body parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

