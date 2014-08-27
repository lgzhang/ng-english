'use strict';

angular.module('ng-demo').directive('appContainer', function() {
  return {
    restrict: 'EA',
    templateUrl: 'views/home/container.html',
    controller: function(){

    },
    controllerAs: 'container'

  }
});