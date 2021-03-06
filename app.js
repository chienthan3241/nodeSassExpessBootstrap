var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var _ = require('lodash');
var request = require('request');
var urli = require('url');

//mongoose
var mongoose = require('mongoose');

//mongoose.connect('mongodb://127.0.0.1/nodetest');
mongoose.connect('mongodb://tmchut:Phuthuz123@ds055752.mongolab.com:55752/node_staging_eu');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

//user proxy request to avoid cors http request spotify
app.use('/corsproxyspotify', function(req, res) {
        var url = 'https://api.spotify.com/v1/users/';
        var params = urli.parse(req.url, true).query;
        var accessToken = 'Bearer ' + params.token;
        url += params.users + '/playlists/';
        url += params.playlists;
        if (_.has(params, 'playlisttracks') && _.toLower(_.get(params, 'playlisttracks')) === 'y') {
          url += '/tracks';
        }
        url += '?';
        url += (_.has(params, 'market')) ? 'market=' + params.market + '&' : '';
        url += (_.has(params, 'limit')) ? 'limit=' + params.limit + '&' : '';
        url += (_.has(params, 'offset')) ? 'offset=' + params.offset + '&' : '';
        url = _.trimEnd(url, '&');
        url = _.trimEnd(url, '?');
        req.pipe(request({url: url, headers: {Authorization: accessToken}})).pipe(res);
});
// cors proxy for request deezer
app.use('/corsproxydeezer', function (req, res) {
    var url = 'https://api.deezer.com/';
    var params = urli.parse(req.url, true).query;
    url += params.qtype;

    if (params.qtype == 'search') {
        if (params.type != 'all') {
            url += '/' + params.type;
        }
        url += '?q=' + params.q + '&';
        url += _.has(params, 'fuzzy') ? 'strict=on&' : '';
        url += _.has(params, 'order') ? 'order=' + params.order + '&' : ''
    } else {
        url += '/' + params.q + '?';
    }
    if (_.has(params, 'index')) {
        url += 'index=' + params.index + '&';
    }
    if (_.has(params, 'limit')) {
        url += 'limit=' + params.limit + '&';
    }
    url += 'output=json';
    req.pipe(request({url: url})).pipe(res);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
