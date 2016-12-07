/**
 * Created by jain_ro on 11/28/2016.
 */
'use strict';
angular.module("advApp")
    .directive('productList', function () {
        return {
            restrict: 'E',
            scope : "=",
            templateUrl: '../../html/templates/productList.html',
            link: function (scope, ele, attrs) {
                scope.productList = [
                    {
                        "id": "1",
                        "name": "Mac Book Pro",
                        "price": "2,30,000",
                        "postDate": "21/11/2016",
                        "postBy": "john Deo"
                    },
                    {
                        "id": "2",
                        "name": "Mac Book Pro",
                        "price": "2,30,000",
                        "postDate": "21/11/2016",
                        "postBy": "john Deo"
                    }
                ];

                console.log('function link : ', scope.productList);
            }
        };
    });