var MainController = function ($scope, $http) {
    var onSuccess = function (res) {
        $scope.stocks = res.data;
    }
    var onError = function (err) {
        $scope.error = err;
    }

    var updateList = function (res) {
        $scope.stocks.push(res.data);
    }

    $http.get('/stocks')
        .then(onSuccess, onError);

    $scope.addStock = function (s, c, p) {
        $http({
            method: "post",
            url: "/stocks",
            data: {
                symbol: s,
                count: c,
                purchasePrice: p
            }
        }).then(updateList, onError);
    }
}

var ngPortfolioApp = angular.module("ngPortfolioApp", []);

ngPortfolioApp.controller("MainController", MainController);
