/**
 * Requires the mongoose module
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    /**
     * Creating the StockSchema
     */
    StockSchema = new Schema({
        symbol: String,
        count: Number,
        purchasePrice: Number
    });

mongoose.model('Stock', StockSchema);
