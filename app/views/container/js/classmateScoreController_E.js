/*function classmateScoreController_E($scope) {
		$scope.classmateScoreDetail = [
		{name: '刘贺', score:100},
		{name: '王丽丽', score:60},
		{name: '张秋生', score:80},
		{name: '马娇娇', score:70},
		{name: '马云', score:90},
		{name: '乌力吉普仁', score:50},
		{name: '刘贺三', score:20},
		{name: '刘贺丽', score:100},
		{name: '王丽', score:60},
		{name: '张秋娇生', score:80},
		{name: '马娇', score:70}
		];	
}*/
function toggleDetailController($scope) {
      $scope.Detailchecked = false;
	      $scope.toggleDetail = function() {
		  $scope.Detailchecked = !$scope.Detailchecked;
	  };
}
angular.module('ListenAndWirteModule', [])
    .controller('ListenAndWirteController', ['$scope', function($scope) {
      $scope.classmateScoreDetail = [
		{name: '刘贺', score:99},
		{name: '王丽丽', score:60},
		{name: '张秋生', score:80},
		{name: '马娇娇', score:70},
		{name: '马云', score:90},
		{name: '乌力吉普仁', score:50},
		{name: '刘贺三', score:20},
		{name: '刘贺丽', score:98},
		{name: '马娇娇', score:70},
		{name: '马云', score:90},
		{name: '乌力吉普仁', score:50},
		{name: '刘贺三', score:81},
		{name: '刘贺丽', score:98},
		{name: '王丽', score:60}
		];
	  //$scope.predicate = '-score'; 排序
	  $scope.bestScore = function(e) {
           return e.score>90;
      };
	  $scope.MyHistoryGradingDetail = [
		{score:70,time:'2014/8/25  12:00'},
		{score:50,time:'2014/8/23  12:00'},
		{score:80,time:'2014/8/26  11:00'},
		{score:20,time:'2014/8/23  15:00'},
		{score:70,time:'2014/8/25  12:00'}
		];
	  $scope.wordError = [
		{word: 'machines', incorrectness:92},
		{word: 'machines', incorrectness:95},
		{word: 'machines', incorrectness:92},
		{word: 'machines', incorrectness:99},
		{word: 'litter', incorrectness:89},
		{word: 'machines2', incorrectness:89},
		{word: 'machines3', incorrectness:49},
		{word: 'machines4', incorrectness:39},
		{word: 'machines5machines3', incorrectness:93},
		{word: 'machines6', incorrectness:59},
		{word: 'machines7', incorrectness:29}
		];
	    $scope.ErrorRateDescending = '-incorrectness';
		$scope.bigIncorrectness = function(e) {
			 
			 return e.incorrectness>50;
		};
    }])

   /* .directive('myDialog', function() {
      return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'my-dialog.html'
      };
});*/