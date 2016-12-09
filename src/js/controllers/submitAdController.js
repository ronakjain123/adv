/**
 * Created by jain_ro on 11/28/2016.
 */

var app = angular.module('advApp')

app.controller('submitAdController', ['$rootScope', '$scope', 'submitAdService', '$location', function($rootScope, $scope, submitAdService, $location) {
    console.log('submitAd ctrl.......');
    $scope.user = {};
    $scope.submitAd = function() {

        var res = submitAdService.submitAd($scope.user);
        res.success(function (data, status, headers, config) {
            var res1 = JSON.stringify(data);

            console.log(data);
            console.log(data.data);

                if(data.data.userId) {
                    $location.path('/home');
                    $rootScope.userdata = data.data;

                    console.log($rootScope);
                }else {
                    console.log('Failed...');
                    console.log(data.data);
                    $location.path('/login');
                    $rootScope.userdata = [];
                }
            })
            .error(function (data, status, header, config) {
            });
    };
}]);