'use strict';

angular.module('mainController', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/notes', {
      templateUrl   :   '/templates/pages/notes/index.html'
    })
    .when('/users', {
      templateUrl   :   'templates/pages/users/index.html'
    })
    .when('/notes/new', {
      templateUrl   :   'templates/pages/notes/edit.html',
      controller    :   function($http){
        var controller = this;
        $http({
          method    :   "GET",
          url       :   '/notes'
        }).success(function(data){
          controller.notes = data;
        });
      },
      controllerAs  :   'notesCtrl'
    })
    .when('/', {
      redirectTo    :   '/users'
    })
    .otherwise({redirectTo : '/notes'});

}]);
