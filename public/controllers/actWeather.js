/**
 * Created by Fabian Tschullik on 02.07.2016.
 */
/**
 * Created by Fabian Tschullik on 01.07.2016.
 */
var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");


    var refresh = function() {

        $http.get('/dashboard').then(function (response) {
            console.log(response);
            $scope.weather = response.data;

            console.log("Hello World from controller");
        });﻿


    };

    refresh();


}]);

