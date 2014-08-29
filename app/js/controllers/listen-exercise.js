function listenExercise($scope, $http, $modal) {
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

	var myModal = $modal({
		title: '提示',
		content: 'My Content',
		show: false
	});

	var myOtherModal = $modal({scope: $scope, content: '确定要提交本次作答吗？',title: '提示', placement:'bottom',template: 'modal/docs/modal.tpl.demo.html', confirm:'postAndJump()',backdrop: 'static',show: false});

	// 提交跳转
	$scope.postAndJump = function() {
		// $scope.showModal();
		myOtherModal.$promise.then(myOtherModal.hide);
		window.location.href = '#/listen-exercise/fail';
	}

	$scope.showModal = function() {
		myOtherModal.$promise.then(myOtherModal.show);
	};

	// 选项
	$scope.map = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

	listenExercise.$inject = ['$scope', '$http'];
}