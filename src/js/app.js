/**
 * Created by jain_ro on 11/28/2016.
 */
var advApp =  angular.module("advApp",['ngRoute']);

advApp.config(['$routeProvider', function($routeProvider){

    $routeProvider.
    when("/home/",{
        templateUrl: '../html/partials/product.html',
        controller: 'productController'
    }).
    when("/login/",{
        templateUrl: '../html/partials/login.html',
    }).
    when("/signup/",{
        templateUrl: '../html/partials/signup.html',
    }).
    when("/productDesc/id=:id",{
        templateUrl: '../html/partials/singleProduct.html',
        controller: 'singleProductController'
    }).
    when("/submitAd/",{
        templateUrl: '../html/partials/submitAd.html',
    }).
    when("/editAd/",{
        templateUrl: '../html/partials/editAd.html',
    }).
    otherwise({
        redirectTo: '/login/'
    });
}]);