/**
 * Created by jain_ro on 11/28/2016.
 */
var app = angular.module('advApp')

app.controller('editAdController', ['$scope', 'editAdService', function($scope, editAdService) {
    $scope.editAd= function() {
        editAdService.editAd();
    }
}]);