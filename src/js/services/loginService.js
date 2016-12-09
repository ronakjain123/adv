/**
 * Created by jain_ro on 11/28/2016.
 */
var app = angular.module('advApp')
app.service('loginService', ['$http','$location', function($http, $location) {
    this.login = function(userdata) {
        return $http.post('http://10.20.14.83:9000/login', userdata);
    }
}]);