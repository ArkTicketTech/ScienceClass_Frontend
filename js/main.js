require('../css/base.less');
require('../css/test.less')

var scienceclass = angular.module('scienceclass', ['ui.bootstrap', 'ui.router', 'ngMaterial']);
scienceclass.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider, $httpProvider) {
  $httpProvider.defaults.withCredentials = true;
  $mdThemingProvider.setDefaultTheme('altTheme');
  $mdThemingProvider.theme('altTheme')
    .primaryPalette('blue');
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
    })
    .state('test', {
      url: '/test',
      templateUrl: 'templates/test.html',
      controller: 'TestCtrl',
    })

  $urlRouterProvider.otherwise('/login');
});

scienceclass.controller('RootCtrl', function($scope, $rootScope, $mdDialog, $http, User) {
  $scope.userInfo = User.info;
  //User.fetchInfo();
  $rootScope.lan = 'CN';
  $rootScope.headershow = true;
  $scope.goto = function(path) {
    window.location.href = '#/' + path;
  };
  $scope.logout = function() {
    $http.get(__API_ROOT__ + '/api/v1/user/logout')
      .success(function (res){
        User.info.isLogin = false;
        window.location.href = '#/login'
      })
      .error(function (res){
        alert(res);
      });
  };
});


scienceclass.controller('LoginCtrl', require('./login_controller.js'));
scienceclass.controller('TestCtrl', require('./test_controller.js'));
scienceclass.service('User', require('./user.js'));
