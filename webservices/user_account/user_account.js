//controllers/someController.js
var express = require('express');
var router = express.Router();

router.post('/test', function (req, res, next) {
    console.log('TEST1 called')
});
router.get('/test', function (req, res, next) {
    console.log('TEST2 Called')
});

module.exports = router;