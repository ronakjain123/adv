/**
 * Created by jain_ro on 11/28/2016.
 */
var app = angular.module('advApp')

app.controller('signUpController', ['$scope', 'signUpService', function($scope, signUpService) {
    $scope.signUp = function() {
        signUpService.signUp();
    }
}]);