/* global angular */
/**
 * Creating an angular Application object
 */
var ngPortfolioApp = angular.module("ngPortfolioApp", ['ngRoute', 'markitDataServices']);

/**
 * configure the routes for the application
 * using when to configure the route specific for a hash url
 * TODO: use otherwise to configure a default or unknown url route
 * NOTE: ng-route is a seperate javascript file. angular-route.js
 */
ngPortfolioApp.config(function ($routeProvider) {
    'use strict';
    /**
     * route to dashboard if no hash is present in the url
     */
    $routeProvider.when('/', {
        templateUrl: 'templates/dashboard.html'
    });
    /**
     * route to stock details of the stocksymbol in the hash
     */
    $routeProvider.when('/stocks/:stocksymbol', {
        templateUrl: 'templates/stockDetails.html'
    });
});
/**
 * Adding DashboardController to the Application / Module
 * Added $scope and $http are injected into the DashboardController
 * This helps in minification of DashboardController and
 * The arguments for DashboardController will be resolved by the injected paramenters in the same order
 * Here $scope would be s in the DashboardController since it is the first argument
 * $http would be h in DashboardController
 */
ngPortfolioApp.controller("DashboardController", ['$scope', '$http', DashboardController]);

/**
 * Adding StockDetailsController to the Application / Module
 * Added $scope and $http are injected into the StockDetailsController
 * This helps in minification of StockDetailsController and
 * The arguments for StockDetailsController will be resolved by the injected paramenters in the same order
 * Here $scope would be s in the StockDetailsController since it is the first argument
 * $http would be h in StockDetailsController
 */
ngPortfolioApp.controller("StockDetailsController", ['$scope', '$routeParams', 'Quote', StockDetailsController]);
