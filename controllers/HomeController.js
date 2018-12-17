var app = angular.module("app", []);


app.controller("HomeCtrl",['$scope', function($scope, $rootScope, $location){

    $rootScope.activetab = $location.path();
}]);
