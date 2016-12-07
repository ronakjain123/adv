/**
 * Created by jain_ro on 11/28/2016.
 */
var app = angular.module('advApp')

app.service('loginService', ['$http', function($http) {
    //var loginData = {"userName": "anand", "password": "anand123"};
    var config = {
        header: {
            method: 'JSONP',
            type: 'application/json'
        }
    }
    this.login = function() {
        console.log('Calling Service');
        var dataRecieved = $http.post('http://10.20.14.83:9000/login',
                    {"userName": "anand", "password": "anand123"},
                    config
        );

        console.log('dataRecieved === ', dataRecieved);
    }
}]);