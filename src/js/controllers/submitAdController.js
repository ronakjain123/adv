/**
 * Created by jain_ro on 11/28/2016.
 */
var app = angular.module('advApp')

app.controller('submitAdController', ['$rootScope', '$scope', 'submitAdService', '$location', function($rootScope, $scope, submitAdService, $location) {
    $scope.post = {};
    $scope.submitAd = function() {
        var res = submitAdService.submitAd($scope.post);
        res.success(function (data, status, headers, config) {
        // console.log('itemList', $rootScope.userdata.itemList);
                if(data.data.userId) {
                    $rootScope.userdata.itemList = data.data;
                    $location.path('/home/');
                }else {
                    $rootScope.userdata = [];
                    $location.path('/login/');
                }
            })
            .error(function (data, status, header, config) {
	           	$location.path('/login/');
            });
    };
}]);