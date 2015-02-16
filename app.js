/* jslint node:true */

/* Requiring all the packages */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/users');
var stocks = require('./routes/stocks');

var app = express();

/*  View engine setup */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

/* uncomment after placing your favicon in /public */
//app.use(favicon(__dirname + '/public/favicon.ico'));

/* Adding / Using the required Middleware */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());

app.use('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

/* Middleware for accessing static files html / CSS / images */
app.use(express.static(path.join(__dirname, 'public')));

/* Adding the routes */
app.use('/', routes);
app.use('/users', users);
app.use('/stocks', stocks);

/* Middleware for Error Handling
   catch 404 and forward to error handler */
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

/* Error Hanlder based on the environment
   for environment:development we will print stacktrace */
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

/* Error Hanlder based on the environment
   for environment:production we will not display stacktrace */
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
