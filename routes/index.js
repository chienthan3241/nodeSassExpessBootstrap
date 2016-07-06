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
      res.render('index', { title: 'Express', results: users , navHome: 'active'});
      //res.send(JSON.stringify(users));
    }
  });
  //res.render('index', { title: 'Express', results: [] });
});

// itunes api
router.get('/itunes', function(req, res, next) {
  res.render('itunes', { title: 'Itunes Api', navDrop: 'active'});
});

//spotify api
router.get('/spotify', function(req, res, next) {
  res.render('spotify', { title: 'Spotify Api',  navDrop: 'active'});
});

//deezer api
router.get('/deezer', function(req, res, next) {
  res.render('deezer', { title: 'Deezer Api',  navDrop: 'active'});
});

module.exports = router;
