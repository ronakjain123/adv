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
                        "date": "2/11/2016",
                        "by": "John Deo"
                    },
                    {
                        "id": "2",
                        "name": "Lenovo Desktop",
                        "price": "7,000",
                        "date": "21/11/2016",
                        "by": "Messi"
                    },
                    {
                        "id": "3",
                        "name": "Mac Book Pro",
                        "price": "2,30,000",
                        "date": "21/11/2016",
                        "by": "Ronaldo"
                    },
                    {
                        "id": "4",
                        "name": "Motorola G4",
                        "price": "13,000",
                        "date": "11/11/2016",
                        "by": "Jack"
                    },
                    {
                        "id": "5",
                        "name": "Maruti swift",
                        "price": "6,30,000",
                        "date": "11/11/2016",
                        "by": "John Deo"
                    }

                ];
            }
        };
    });