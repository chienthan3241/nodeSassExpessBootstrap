var express = require('express');
var router = express.Router();
var user = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
   user.find(function (err, users) {
    if(err) {
      res.send('no user in db');
    } else {
      res.send(users);
    }
  });
});

module.exports = router;
