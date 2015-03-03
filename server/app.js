/**
 * jslint node:true
 */
/**
 * Requiring all the required modules
 */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/users');
var stocks = require('./routes/stocks');

/**
 * Application object
 */
var app = express();

/**
 * Setting up path or location for views / templates
 * Setting up the view engine to be used - Jade
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

/* uncomment after placing your favicon in /public */
//app.use(favicon(__dirname + '/public/favicon.ico'));

/**
 * Using the required middleware
 */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());

/**
 * Applying the header values for the response
 * TODO: Can be removed if not required
 */
app.use('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

/**
 * Using the static middleware
 * set the location or path for the static files
 * static files: HTML, CSS, Images
 * resources used by the client side application
 */
app.use(express.static(path.join(__dirname, '../client')));

/**
 * middleware for routes
 */
app.use('/', routes);
app.use('/users', users);
app.use('/stocks', stocks);

/**
 * Middleware for Error Handling
 * Catch 404 error
 */
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

/**
 * Export the application object in the module
 */
module.exports = app;
