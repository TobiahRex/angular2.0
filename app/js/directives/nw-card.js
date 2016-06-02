'use strict';

angular.module('NotesWrangler', [])
.directive('nwCard', [function(){
  var num = 1;
  return {
    restrict     :   'E',
    templateUrl  :   'templates/directives/nw-card.html',
    controller   :   function($scope){
      scope : {
        header  : '=',
        icon    : '='
      },
      $scope.header = 'NoteTitle' + num++,
      $scope.description = 'A lovely note description';
    };
    controllerAs : 'card'
  };
}]);

/*

*/
