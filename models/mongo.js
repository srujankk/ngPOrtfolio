var mongoose = require('mongoose'),
    config = require('../config.js'),
    mongoOptions = {
        db: {
            safe: true
        }
    };

/**
 * Db connection for mongoose
 */
mongoose.connect(config.dbConn, mongoOptions, function (err, res) {
    if (err) {
        console.log('Error connecting to: ' + config.dbConn + ' > ' + err)
    } else {
        console.log('Success Connecting to: ' + config.dbConn);
    }
});

module.exports = mongoose;
