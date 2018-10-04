var express = require('express');
var router = express.Router();
var model = require('../model/user_account/user_account');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Useraccount Request hit at time: ', Date.now());
    next();
});

router.get('/', function (req, res) {
    res.send('Useraccount home');
});

router.get('/getAllUsers', function (req, res) {
    let x = model.test(req, res);
    res.send('Get all users ' + x);
});

module.exports = router;