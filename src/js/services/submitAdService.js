/**
 * Created by jain_ro on 11/28/2016.
 */
var app = angular.module('advApp')

app.service('submitAdService', ['$http', function($http) {
    this.submitAd = function() {
        $http.post({url: 'http://10.20.14.83:9000/postAd', method: 'JSONP'}).then({
            'success': function() {
                console.log('Success12..........');
            },
            'failure': function() {
                console.log('Failed12..........');
            }
        })
    }
}]);