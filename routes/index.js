var express = require('express');
var router = express.Router();
var user = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  user.find(function(err, users) {
    if(err) {
      res.send(err);
      //res.render('index', { title: 'Express', users: [] });
    } else {
      res.render('index', { title: 'Express', results: users });
      //res.send(JSON.stringify(users));
    }
  });
  //res.render('index', { title: 'Express', results: [] });
});

module.exports = router;
