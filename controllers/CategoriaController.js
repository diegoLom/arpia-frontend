var app = angular.module('categoria', ["ngResource"]);


app.factory("consumerCategoria", function($resource){
  return $resource('localhost:8090/categoria');
});

app.controller('CategoriaCtlr', ['$scope', function($scope, consumerCategorias){

$scope.title = 'Cadastro de Categoria';

this.descricao = "";


consumerCategoria.query(function(data) {
        $scope.categorias = data;
    }, function(err) {
        console.error("Error occured: ", err);
    });


this.cancelar = function cancelar(){

}

this.salvar = function salvar(){

}


this.pesquisar = function pesquisar(){

}

this.pegar = function pegar(codigo){

}


this.pesquisar = function deletar(){

}

}]);
