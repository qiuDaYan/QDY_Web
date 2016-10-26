var app = angular.module('app',['ngRoute']);

// 配置路由信息
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl:'./assets/tpl/index.html',
          controller:''
        })
        .when('/blog',{
          templateUrl:'./assets/tpl/blog.html',
          controller:''
        })
        .when('/book',{
          templateUrl:'./assets/tpl/book.html',
          controller:'bookController'
        })
        .when('/about_me',{
          templateUrl:'./assets/tpl/about_me.html',
          controller:''
        })
        .when('/book_detail/:id', {
        templateUrl:'./assets/tpl/book_detail.html',
        controller:'booklistCtrl'
      })
        .otherwise({
          redirectTo:'/',
        });
}]);
