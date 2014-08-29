

var ListenAndWirteModule = angular.module('ListenAndWirteModule', []);

/*同学分数*/
ListenAndWirteModule.controller('classmateScoreController', ['$scope', '$http',
	function($scope, $http) {
		$http.get('json/classmateScore.json').
		success(function(data) {
			$scope.classmateScoreDetail = data;
			$scope.bestScore = function(e) {
				return e.score > 90;
			};
		});
	}
]);

/*我的历史分数*/
ListenAndWirteModule.controller('MyHistoryGradingController', ['$scope', '$http',
	function($scope, $http) {
		$http.get('json/MyHistoryGrad.json').
			success(function(data) {
				$scope.MyHistoryGradingDetail = data;
			});
	}
]);


/*常错试题错误率*/
ListenAndWirteModule.controller('wordIncorrectnessController', ['$scope', '$http',
	function($scope, $http) {
		$http.get('json/wordincorrectness.json').
			success(function(data) {
				$scope.wordError = data;

				$scope.ErrorRateDescending = '-incorrectness';

				$scope.bigIncorrectness = function(e) {
					return e.incorrectness > 50;
				};
			});
	}
]);


/*详情切换*/
function toggleDetailController($scope) {
	$scope.Detailchecked = false;
	$scope.toggleDetail = function() {
		$scope.Detailchecked = !$scope.Detailchecked;
	};
}

/* .directive('myDialog', function() {
      return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'my-dialog.html'
      };
});*/