/**
 * Created by jain_ro on 11/28/2016.
 */
var app = angular.module('advApp')

app.controller('loginController', ['$rootScope', '$scope', 'loginService', '$location', function($rootScope, $scope, loginService, $location) {
    //console.log('Init login ctrl.......');
    $scope.user = {};
    $scope.signIn = function() {
        var res = loginService.login($scope.user);
        res.success(function (data, status, headers, config) {
            var res1 = JSON.stringify(data);
            //console.log(data.data.userId);
                if(data.data.userId) {
                    $location.path('/home');
                    $rootScope.userdata = data.data;
                 /*   console.log($rootScope);*/
                }else {
                    /*console.log('Failed...');
                    console.log(data.data);*/
                    $location.path('/login');
                    $rootScope.userdata = [];
                    alert('Please enter the correct Username or Password');
                }
            })
            .error(function (data, status, header, config) {
            });
    };
    $scope.logout = function() {
        $rootScope.userdata = [];
        $location.path('/login/');
    }
}]);