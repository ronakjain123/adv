/**
 * Created by jain_ro on 11/28/2016.
 */
var app = angular.module('advApp')

app.service('signupService', ['$http', function($http) {
    this.signup = function() {
        $http.post({url: 'http://10.20.14.83:9000/register', method: 'JSONP'}).then({
            'success': function() {
            },
            'failure': function() {
            }
        })
    }
}]);