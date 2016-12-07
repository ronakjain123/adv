/**
 * Created by jain_ro on 11/28/2016.
 */
'use strict';
angular.module("advApp")
    .directive('login', function () {
        return {
            restrict: 'E',
            scope : "=",
            templateUrl: '../../html/templates/login.html',
        };
    });