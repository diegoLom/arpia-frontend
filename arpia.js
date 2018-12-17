var app = angular.module("app", ["ngRoute"]);


app.config(function($routeProvider, $locationProvider){


  $locationProvider.html5Mode(true);


  $routeProvider.
    when("/", {
      templateUrl : 'arpia-frontend/index.html',
      controller     : 'HomeCtrl'
    }).
    when("/categoria", {
      templateUrl : 'arpia-frontend/views/lst-categoria.html',
      controller     : 'CategoriaCtrl'
    }).
    when("/produto", {
      templateUrl : 'arpia-frontend/views/lst-produto.html',
      controller  : 'ProdutoCtrl'
    }).
    otherwise
    ({ redirectTo: '/' });;



})
