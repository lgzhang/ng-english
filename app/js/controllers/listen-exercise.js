function listenExercise($scope, $http) {
	// 结果页面每个表格最多显示7道题
	var column = 7;

	$http.get('localdata/listen-exercise.json').success(function(data) {
		$scope.exerciseList = data;
		var exerciseListSlice = [
			[]
		];
		var tempSlice = [];
		for (var i = 0; i < $scope.exerciseList.length; i++) {
			exerciseListSlice[exerciseListSlice.length - 1].push(i);
			if (0 == (i + 1) % column)
				exerciseListSlice.push([]);
		}
		if (exerciseListSlice[exerciseListSlice.length - 1] == 0) exerciseListSlice.pop();
		$scope.exerciseListSlice = exerciseListSlice
		console.log($scope.exerciseListSlice);
	});

	// 选项
	$scope.map = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

	listenExercise.$inject = ['$scope', '$http'];
}