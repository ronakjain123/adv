/**
 * Created by jain_ro on 11/28/2016.
 */
var app = angular.module('advApp')

app.controller('signUpController', ['$scope', 'signUpService', function($scope, signUpService) {
    console.log('sign.......');
    $scope.signUp = function() {
        console.log('signup12.......');
        signUpService.signUp();
    }


}]);