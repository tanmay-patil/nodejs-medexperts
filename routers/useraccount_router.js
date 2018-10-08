const express = require('express');
const router = express.Router();
const controller = require('../controllers/user_account/user_account_controller');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Useraccount Request hit at time: ', Date.now());
    next();
});

router.get('/', function (req, res) {
    res.send('Useraccount home');
});

router.get('/getAllUsers', function (req, res) {
    let allUsersList = controller.getAllUsers();
    res.send('Get all users ' + allUsersList);
});

module.exports = router;