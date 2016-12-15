/**
 * Created by jain_ro on 11/28/2016.
 */
'use strict';
angular.module("advApp")
    .directive('productList', ['$rootScope', '$http', function ($rootScope, $http) {
        
        //for rendering all products
        return {
            restrict: 'E',
            scope : "=",
            templateUrl: '../../html/templates/productList.html',
            link: function (scope, ele, attrs) {
                $http({
                method: 'GET',
                url: 'http://10.20.14.83:9000/posts',
                headers: {
                   'auth-token': $rootScope.userdata['auth-token']
                 }
               }).then (function (data){
                scope.productList = data.data.data.mypostList;
               })
            }
        };
    }]);