'use strict';

angular.module('NotesWrangler', [])
.controller('NotesShowController', ['$http', function($http){
  var controller = this;
  $http({
    method    :   'GET',
    url       :   `/notes/${$routeParams.id}`
  }).success(data => {
    controller.note = data;
  });
}]);
