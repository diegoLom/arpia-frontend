var app = angular.module("home", []);


app.controller("HomeCtrl",["$scope", function($scope, $rootScope, $location){

    $rootScope.activeLab = $location.path();
}]);
