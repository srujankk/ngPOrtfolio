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
}

/**
 * Adding StockDetailsController to the Application / Module
 * Added $scope and $http are injected into the StockDetailsController
 * This helps in minification of StockDetailsController and
 * The arguments for StockDetailsController will be resolved by the injected paramenters in the same order
 * Here $scope would be s in the StockDetailsController since it is the first argument
 * $http would be h in StockDetailsController
 */
ngPortfolioApp.controller("StockDetailsController", ['$scope', '$routeParams', 'Quote', StockDetailsController]);
