var mongoose = require('mongoose'),
    config = require('../config.js')

/**
 * Db connection for mongoose
 */
mongoose.connect(config.dbConn);

module.exports = mongoose;
