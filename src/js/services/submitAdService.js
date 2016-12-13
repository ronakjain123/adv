/**
 * Created by jain_ro on 11/28/2016.
 */

var app = angular.module('advApp')

app.service('submitAdService', ['$rootScope', '$http','$location', function($rootScope, $http, $location) {
    this.submitAd = function(data) {
         /*data.photoCount = 2;
         data.photo1 = "111";
         data.photo2 = "222";*/
         // console.log(data);
        var req = {
         method: 'POST',
		 url: 'http://10.20.14.83:9000/postAd',
		 headers: {
		   'auth-token': $rootScope.userdata['auth-token']
		 },
		 data: data
		}
		return $http(req);
    }
}]);