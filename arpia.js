var app = angular.module("app", ['ngRoute', 'ngResource']);


app.config(function($routeProvider, $locationProvider){


  $locationProvider.html5Mode(true);


  $routeProvider
    .when("/home", {
      templateUrl : 'home.html',
      controller: 'HtmlCtrl',

    })
    .when("/categoria", {
      templateUrl : '/views/lst-categoria.html',
      controller     : 'CategoriaCtlr',

    })
    .when("/produto", {
      templateUrl : '/views/lst-produto.html',
      controller  : 'ProdutoCtrl',

    }).
    otherwise
    ({ redirectTo: '/' });;



});




app.factory("consumerCategoria", function($resource){
  return $resource('localhost:8090/categoria');
});

app.controller('CategoriaCtlr',  function($scope, consumerCategorias, $location, $rootScope){

$scope.title = 'Cadastro de Categoria';

this.descricao = "";


$rootScope.activeLab = $location.path();

consumerCategoria.query(function(data) {
        $scope.categorias = data;
    }, function(err) {
        console.error("Error occured: ", err);
    });




});
