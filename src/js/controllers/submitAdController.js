/**
 * Created by jain_ro on 11/28/2016.
 */
var app = angular.module('advApp')

app.controller('submitAdController', ['$rootScope', '$scope', 'submitAdService', '$location', function($rootScope, $scope, submitAdService, $location) {
    $scope.post = {};
    $scope.submitAd = function() {
        var res = submitAdService.submitAd($scope.post);
        res.success(function (data, status, headers, config) {
            
                if(data.data.userId) {
                    $location.path('/home');
                    $rootScope.userdata = data.data;

                }else {
                    $location.path('/login');
                    $rootScope.userdata = [];
                }
            })
            .error(function (data, status, header, config) {
	           	$location.path('/login');
            });
    };
}]);