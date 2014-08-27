'use strict';

angular.module('ng-demo').directive('appHeader', function() {
  return {
    restrict: 'EA',
    templateUrl: 'views/home/header.html',
    controller: function(){

    },

    
    controllerAs: 'header'

  }
});