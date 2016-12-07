/**
 * Created by jain_ro on 11/28/2016.
 */
var advApp =  angular.module("advApp",['ngRoute']);

advApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when("/home",{
        templateUrl: '../html/partials/product.html',
    }).
    when("/login",{
        templateUrl: '../html/partials/login.html',
    }).
    when("/signup",{
        templateUrl: '../html/partials/signup.html',
    }).
    when("/productdesc",{
        templateUrl: '../html/partials/singleProduct.html',
    }).
    when("/submitad",{
        templateUrl: '../html/partials/submitad.html',
    }).
    otherwise({
        redirectTo: '/home'
    });
}]);