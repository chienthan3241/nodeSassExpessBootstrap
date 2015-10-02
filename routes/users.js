var express = require('express');
var router = express.Router();
var user = require('../models/users');

/* user by name */
router.get('/name/:name', function(req, res, next) {
    user.find( {'name': req.params.name}, function(err, user) {
        if(err) {
            res.send('no user in db');
        } else {
            res.render('users', {title: 'Users Management', results: user});
        }
    });
});


/* GET all users listing. */
router.get('/', function(req, res, next) {
    user.find(function (err, users) {
        if(err) {
            res.send('no user in db');
        } else {
            res.render('users', {title: 'Users Management', results: users});
        }
    });
});


router.post('/', function(req, res) {
    if (req.body._method === "delete" && req.body.id) {
        //delete user
        user.remove({'_id' : req.body.id}, function(err) {
            if (err) return handleError(err);
        });
    } else if (req.body._method === "insert" && req.body.username && req.body.email) {
        //insert user
        var newUser = new user({'name' : req.body.username, 'email' : req.body.useremail});
        newUser.save(function(err) {
            if (err) return handleError(err);
        });
    }
    res.redirect('/users');
});

module.exports = router;
