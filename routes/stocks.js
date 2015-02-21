/**
 * Require the modules
 * express: framework
 * mongoose: module to connect MongoDB
 * body-parser: middleware
 */
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

/**
 * use bosyParser Middleware
 */
express().use(bodyParser.json());

/**
 *create express router object
 */
var router = express.Router(),
    /**
     * Mongoose Schema
     */
    Schema = mongoose.Schema,
    /**
     * Create Stock Schema
     */
    stockSchema = new Schema({
        symbol: String,
        count: Number,
        purchasePrice: Number
    });

/**
 * Connect to the mongodb : portfolio database
 */
mongoose.connect('mongodb://localhost:27017/portfolio');

/**
 * storing the connecction object
 */
var db = mongoose.connection;

/**
 * TYPE: GET
 * URL: "/stocks"
 * This would get the list of stocks from the database
 */
router.get('/', function (req, res, next) {
    /**
     * access stocks collection in the db
     */
    var portfolio = db.collection('stocks');
    /**
     * find() on collection would query for the list of items in the collection
     * stocks would be in json format
     * TODO: handle error scenario
     */
    portfolio.find().toArray(function (err, stocks) {
        /**
         * send the json object as the response
         */
        res.send(stocks);
    });

});

/**
 * TYPE: POST
 * URL: "/stocks"
 * This would post the data to the database
 */
router.post('/', function (req, res, next) {
    var stock = mongoose.model('Stock', stockSchema);
    var s = new stock(req.body);
    s.save(function (e, st) {
        res.send(st);
    });
});

module.exports = router;
