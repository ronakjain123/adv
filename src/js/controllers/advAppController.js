/**
 * Created by jain_ro on 11/28/2016.
 */
var app = angular.module('advApp')

app.controller('singleProductController', ['$scope', '$location', '$http', '$rootScope', function($scope, $location, $http, $rootScope) {
	var id = $location.path();console.log('id=', id);
	id = id.split('=')[1];
	$http({
                method: 'GET',
                url: 'http://10.20.14.83:9000/post/'+id,
                headers: {
                   'auth-token': $rootScope.userdata['auth-token']
                 }
               }).then (function (data){
                $scope.product = data.data.data;
               })
              
}]);

 
