var app = angular.module('produto', ["ngResource"]);


app.factory('consumerProduto', function($resource){


});

app.controller('ProdutoCtrl', ['$scope', function($scope, $location, $rootScope){



  $rootScope.activetab = $location.path();

  $scope.title = 'Cadastro de Categoria';

  this.descricao = "";


  this.cancelar = function cancelar(){

  }

  this.salvar = function salvar(){

  }


}]);
