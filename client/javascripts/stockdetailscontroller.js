/**
 * Defining the StockDetailsController of the application
 * The StockDetailsController would retrieve the details of the stock mentioned in the url#hash
 */
var StockDetailsController = function ($scope, $routeParams, Quote) {
    'use strict';
    /**
     * stockSymbol from the url#hash is retrieved by $routeParams service
     * Quote is the service written to access markit Data API
     * refer to javascripts/services.js for the Quote service
     */
    Quote.query({
        stocksymbol: $routeParams.stocksymbol
    }).$promise.then(function (data) {
            $scope.companyName = data.Name;
            $scope.lastPrice = data.LastPrice;
            $scope.openPrice = data.Open;
            $scope.stocksymbol = data.Symbol;
        },
        function (err) {
            console.log(err);
        });
};
