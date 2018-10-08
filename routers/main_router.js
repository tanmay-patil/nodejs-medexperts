const express = require('express');
const router = express.Router();
const useraccountRouter = require('./useraccount_router');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Webservice Request hit at time: ', Date.now());
    next();
});

router.get('/', function (req, res) {
    res.send('Webservice Home Page');
});

router.get('/about', function (req, res) {
    res.send('About Webservices');
});

// Load Web Services Routers
// 1. User Account Router
router.use('/useraccount', useraccountRouter);

module.exports = router;