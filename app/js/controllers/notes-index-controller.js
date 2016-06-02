'use strict';

angular.module('NoteWrangler', [])
.controller('NotesIndexController', ['$http', '$scope', function($http, $scope){
  $http({
    method    :   'GET',
    url       :   '/notes'
  }).success(data => {
    $scope.notes = data;
  });
}]);
