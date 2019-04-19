var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', header:'more words' });
});

router.get('/chatroom', function(req, res, next) {
    res.render('chatroom', { title: 'Express' });
});

router.get('/submit', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
