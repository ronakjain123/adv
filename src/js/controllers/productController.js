/**
 * Created by jain_ro on 11/28/2016.
 */
var app = angular.module('advApp')

app.controller('productController', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {
    // $scope.productDesc = function() {}
    $scope.singleProductfn = function(id){
    	$location.path('/productDesc/id='+id);
    }
}]);