var app = angular.module('app',['ngRoute']);

// 配置路由信息
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl:'/dangdang-app-angularJs/assets/tpl/index.html',
          controller:'listCtrl'
        })
        .when('/blog',{
          templateUrl:'/dangdang-app-angularJs/assets/tpl/blog.html',
          controller:''
        })
        .when('/book',{
          templateUrl:'/dangdang-app-angularJs/assets/tpl/book.html',
          controller:'bookController'
        })
        .when('/about_me',{
          templateUrl:'/dangdang-app-angularJs/assets/tpl/about_me.html',
          controller:''
        })
        .otherwise({
          redirectTo:'/',
        });
}]);
