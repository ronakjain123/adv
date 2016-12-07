/**
 * Created by jain_ro on 11/28/2016.
 */
'use strict';
angular.module("advApp")
    .directive('editAd', function () {
        return {
            restrict: 'E',
            scope : "=",
            templateUrl: '../../html/templates/editAd.html',
        };
    });