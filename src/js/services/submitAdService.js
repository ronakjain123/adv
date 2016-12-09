/**
 * Created by jain_ro on 11/28/2016.
 */

var app = angular.module('advApp')

app.service('submitAdService', ['$http','$location', function($http, $location) {
    this.submitAd = function(userdata) {
        return $http.post('http://10.20.14.83:9000/postAd', userdata);
    }
}]);