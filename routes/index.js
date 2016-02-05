var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.post('/signIn', function (req, res, next) {
    res.render('chat', {
        title: 'Express',
        user: req.body.inputEmail
    });
});

router.get('/controller', function (req, res, next) {
    res.render('controller', {
        title: 'controller'
    });
});

module.exports = router;