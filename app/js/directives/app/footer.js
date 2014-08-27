'use strict';

angular.module('ng-demo').directive('appFooter', function() {
  return {
    restrict: 'EA',
    templateUrl: 'views/home/footer.html',
    controller: function(){

    },
    controllerAs: 'footer'
  }
});