'use strict';

angular.module('ng-demo').directive('appNav', function() {
  return {
    restrict: 'EA',
    templateUrl: 'views/container/navleft.html',
    controller: function ($scope) {
	  var vm = $scope.vm = {};
	},

    controllerAs: 'navleft'

  }
});