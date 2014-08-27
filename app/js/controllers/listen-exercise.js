function listenExercise($scope,$http) {
	$http.get('localdata/listen-exercise.json').success(function(data){
		$scope.exerciseList = data;
	});

	$scope.map = ['A','B','C','D','E','F','G','H','I'];

	listenExercise.$inject = ['$scope', '$http'];
}