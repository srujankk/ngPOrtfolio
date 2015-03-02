/**
 * Defining the MainController of the application
 * The MainController would retrieve the list of stocks
 */
var MainController = function ($scope, $http) {
    'use strict';
    /**
     * displayAllStocks is the success callback for the "/stocks" GET call
     */
    var displayAllStocks = function (res) {
            $scope.stocks = res.data;
        },

        /**
         * onError is the error callback for following calls
         * "/stocks" GET call
         * "/stocks" POST call
         */
        onError = function (err) {
            $scope.error = err;
        },

        /**
         * addStocktoList is the success callback for "/stocks" POST call
         * this would also reset the input fields once the stock is added to list
         */
        addStocktoList = function (res) {
            $scope.stocks.push(res.data);
            $scope.symbol = "";
            $scope.count = "";
            $scope.purchasePrice = "";
        },

        /**
         * onDetails view is the success callback on click of a stock
         * TODO: onDetails should be converted to a click handler and
         * TODO: onDetails should be updated to route to the details view
         */
        onDetails = function (resp) {
            console.log(resp);
        };

    /**
     * GET call to retrieve all the stocks
     * URL: "/stocks"
     * SUCCESS: displayAllStocks
     * ERROR: onError
     */
    $http.get('/stocks')
        .then(displayAllStocks, onError);

    /**
     * POST call to add a stock to the list / DB
     * URL: "/stocks"
     * DATA: need to pass symbol, count, purchaseprice fo the stock
     * SUCCESS: addStocktoList
     * ERROR: onError
     */
    $scope.addStock = function (s, c, p) {
        $http({
            method: "post",
            url: "/stocks",
            data: {
                symbol: s,
                count: c,
                purchasePrice: p
            }
        }).then(addStocktoList, onError);
    };

    /**
     * GET call to get the details of the stock the user selected
     * URL: "http://dev.markitondemand.com/Api/Quote/jsonp"
     * DATA: Stock Symbol
     * SUCCESS: onDetails
     * ERROR: onError
     * TODO: This should be converted to a click Handler to display the details view
     * The details view should be responsible for making the call to get the details
     */
    $scope.stockDetail = function (s) {
        console.log(s);
        $http({
            "method": "get",
            "url": "http://dev.markitondemand.com/Api/Quote/jsonp",
            "dataType": "jsonp",
            "data": {
                "symbol": s
            }
        }).then(onDetails, onError);
    };
};
