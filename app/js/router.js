angular.module('ng-demo').config(['$stateProvider',function( $stateProvider) {
  // $urlRouterProvider.when('', '/home/home');
  // $urlRouterProvider.when('/', '/home/home');
  // $urlRouterProvider.when('/listen-exercise', {templateUrl:'view/container/exercise/listen-exercise.html',controller:'listenExercise'});
  // $urlRouterProvider.when('/listen-exercise/faile',  {templateUrl: 'view/container/exercise/faile.html',controller:'listenExercise'});
  // $urlRouterProvider.otherwise('/notFound');
  $stateProvider.state('notFound', {
    url: '/notFound',
    controller: 'ctrl.notFound',
    templateUrl: 'views/home/notFound.html'
  })
  .state('listen-exercise',{
    url:'/listen-exercise',
    templateUrl:'views/container/exercise/listen-exercise.html'
  })
  .state('listen-exercise/fail',{
    url:'/listen-exercise/fail',
    templateUrl:'views/container/exercise/fail.html'
  })
  var states = {};
  // 把多级state弄成单级的，并自动补充父级路由，方便后续处理
  // _.each(NavData, function(group) {
  //   _.each(group.items, function(item) {
  //     // 处理多级state，自动添加各个父级state
  //     var paths = item.state.split(/\./g);
  //     var currentPath = '';
  //     _.each(paths, function(path) {
  //       currentPath += path;
  //       states[currentPath] = item;
  //       currentPath += '.'
  //     });
  //   });
  // });
  // // 遵循约定优于配置的原则自动批量注册路由
  // _.each(states, function(item, state) {
  //   var path = state.replace(/\./g, '/');
  //   var lastState = state.match(/(\w+)$/)[0];
  //   $stateProvider.state(state, {
  //     url: '/' + lastState,
  //     controller: 'ctrl.' + state,
  //     templateUrl: 'views/' + path + '.html',
  //     label: item.label,
  //     files: item.files,
  //     description: item.description,
  //     authors: item.authors,
  //     progress: item.progress
  //   });
  // });
}]);
