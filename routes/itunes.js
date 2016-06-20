var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('itunes', { title: 'Itunes Api'});
});
module.exports = router;