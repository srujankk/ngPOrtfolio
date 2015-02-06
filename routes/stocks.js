var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

express().use(bodyParser.json());

var router = express.Router(),
    Schema = mongoose.Schema,
    stockSchema = new Schema({
        symbol: String,
        count: Number,
        purchasePrice: Number
    });

mongoose.connect('mongodb://localhost:27017/portfolio');

var db = mongoose.connection;

router.get('/', function (req, res, next) {

    var portfolio = db.collection('stocks');

    portfolio.find().toArray(function (err, stocks) {
        res.send(stocks);
    });

});

router.post('/', function (req, res, next) {

    var stock = mongoose.model('Stock', stockSchema);
    var s = new stock(req.body);
    s.save(function (e, st) {
        res.send(st);
    });

});

module.exports = router;
