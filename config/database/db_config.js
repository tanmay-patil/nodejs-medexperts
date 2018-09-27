// This file contains the database configuration code

const mysql = require('mysql');
const configVariables = require('../config_variables/config');

let connection = '';

switch (configVariables.SERVER_TYPE) {
    case 'MAMP':
        console.log('Server type is currently set to MAMP')
        connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
        });
        break;

    case 'WAMP':
        console.log('Server type is currently set to MAMP')
        connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: ""
        });
        break;

    default:
        break;
}

connection.connect(function (err) {
    if (err) throw err;
    console.log("Database is now Connected");
});

module.exports = connection;