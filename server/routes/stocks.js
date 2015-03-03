/**
 * Require the modules
 * express: framework
 * stocksController: controller would have the methods and logic for stocks
 */
var express = require('express'),
    stocksController = require('../controllers/stocks'),
    router = express.Router();

/**
 * TYPE: GET
 * URL: "/stocks"
 * This would call the show method in the stocksController
 */
router.get('/', stocksController.show);

/**
 * TYPE: POST
 * URL: "/stocks"
 * This would call the add method in the stocksController
 */
router.post('/', stocksController.add);

/**
 * exports the router
 */
module.exports = router;
