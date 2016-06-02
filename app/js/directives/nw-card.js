'use strict';

angular.module('NotesWrangler', [])
.directive('nwCard', [function(){
  return {
    restrict     :   'E',
    templateUrl  :   'templates/directives/nw-card.html',
    controller   :   function($scope){
      $scope.header = 'NoteTitle',
      $scope.description = 'A lovely note description';
    };
    controllerAs : 'card'
  };
}]);
