var express = require('express');
var router = express.Router();
var io = require('socket.io')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.post('/signIn', function (req, res, next) {
    console.log(req);
    console.log('inputEmail : ' + req.body.inputEmail);
    console.log('inputPassword : ' + req.body.inputPassword);
    res.render('chat', {
        title: 'Express',
        user: req.body.inputEmail
    });
});

module.exports = router;