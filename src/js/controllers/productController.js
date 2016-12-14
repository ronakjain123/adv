/**
 * Created by jain_ro on 11/28/2016.
 */
var app = angular.module('advApp')

app.controller('productController', ['$rootScope', '$scope', '$location', '$http', function($rootScope, $scope, $location, $http) {
    $scope.singleProductfn = function(id){
    	$location.path('/productDesc/id='+id);
    }    
    $scope.remove = function(id, $index){ 
  		// console.log('1=', $scope.productList,);
  		$scope.productList.splice($index, 1);

  		$http({
                method: 'DELETE',
                url: 'http://10.20.14.83:9000/post?postId='+id,
                headers: {
                   'auth-token': $rootScope.userdata['auth-token']
                 },
               }).then (function (data){
                scope.productList = data.data.data.mypostList;
                // console.log('2=', $scope.productList);
               }).then(function(data) {
               })
	}
}]);