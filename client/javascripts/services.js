/**
 * REFERENCE: https://github.com/arnthor3/markitdata-app
 */

/**
 * Created service to access markitData api
 */
var service = angular.module('markitDataServices', ['ngResource']);

//get the Quote details of the stock
service.factory('Quote', ['$resource',
 function ($resource) {
        'use strict';
        return $resource('https://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=:stocksymbol', {
            callback: "JSON_CALLBACK"
        }, {
            query: {
                method: 'JSONP',
                params: {
                    stocksymbol: 'stocksymbol'
                },
                isArray: false
            }
        });
 }
]);
