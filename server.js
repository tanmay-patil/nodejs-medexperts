let db = require('./config/database/db_config');

var app = require('express')();
var someController = require('./webservices/user_account/user_account');
app.use('/test2', someController);