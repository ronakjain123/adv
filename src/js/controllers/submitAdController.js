/**
 * Created by jain_ro on 11/28/2016.
 */
var app = angular.module('advApp')

app.controller('submitAdController', ['$scope', 'submitAdService', function($scope, submitAdService) {

    $scope.submitAd= function() {

        submitAdService.submitAd();
    }
}]);