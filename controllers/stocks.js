/**
 * Requiring the modules
 * requires the stock model
 */
var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    stockModel = require('../models/stockModel'),
    config = require('../config'),
    router = express.Router();

/**
 * Using the body-parser middleware
 */
express().use(bodyParser.json());

/**
 * show would be called when the user is routed with the GET call for '/stocks'
 */
router.get('/', function (req, res) {
    /**
     * Get the Database connection
     */
    var db = mongoose.connection,
        /**
         * Get the collection from the db connection
         */
        portfolio = db.collection('stocks');

    /**
     * Get all the records from the collection
     */
    portfolio.find().toArray(function (err, stocks) {
        /**
         * send the json object as the response
         */
        res.send(stocks);
    });
});

/**
 * add would be called when the user is routed with the POST call for '/stocks'
 */
router.post('/', function (req, res) {
    /**
     * Create a new stockModel with the request body
     */
    var stock = new stockModel(req.body);
    /**
     * Call the save on stock model
     */
    stock.save(function (e, stock) {
        /**
         * send the stock in response so that the UI can display it
         */
        res.send(stock);
    });
});

module.exports = router;
