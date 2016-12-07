/**
 * Created by jain_ro on 11/28/2016.
 */
var app = angular.module('advApp')

app.controller('loginController', ['$scope', 'loginService', function($scope, loginService) {
    console.log('Init login ctrl.......');
    $scope.signIn = function() {
        console.log('Trying to sign in.......');
        loginService.login();
    }
}]);