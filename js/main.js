require('../css/base.less');

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
      controller: 'HomeCtrl'
    })
    .state('study', {
      url: '/study',
      templateUrl:"templates/study.html"
        })
    .state('study.ppt', {
      url: '/studyppt',
      views: {
        'ppt-view':{
          templateUrl:"templates/im.html"
        },
        'bottom-view':{
          templateUrl:"templates/home.html"
        }
      }
    })
  //$urlRouterProvider.otherwise('/login');
});

scienceclass.controller('RootCtrl', function($scope, $rootScope, $mdDialog, $http, User) {
  $scope.userInfo = User.info;
  //User.fetchInfo();
  $rootScope.lan = 'CN';
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
scienceclass.controller('HomeCtrl', require('./home_controller.js'));
scienceclass.controller('StudyCtrl', require('./study_controller.js'));
scienceclass.service('User', require('./user.js'));
