var categoria = angular.module('categoria', []);

categoria.service('CategoriaService', function($http){



function pegar() {
  $http({
         method : "GET",
         url : "localhost:8080/categoria"
     }).then(function mySuccess(response) {
         return response.data;
     }, function myError(response) {
         return response.statusText;
     });
}




});
