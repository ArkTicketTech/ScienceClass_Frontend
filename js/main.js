require('../css/base.less');
require('../css/test.less')
require('../css/home.less')

var scienceclass = angular.module('scienceclass', ['ui.bootstrap', 'ui.router', 'ngMaterial','ngSanitize', 'timer']);
scienceclass.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider, $httpProvider,$sceProvider) {
  $sceProvider.enabled(false);
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
    .state('register', {
      url: '/register',
      templateUrl: 'templates/register.html',
      controller: 'RegisterCtrl'
    })
    .state('home', {
      url: '/home/:typeId',
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl'
    })
    .state('study', {
      url: '/study',
      templateUrl:"templates/study.html"
        })
    .state('study.ppt', {
      url: '/studyppt/:chapter_id',
      views: {
        'ppt-view':{
          templateUrl:"templates/im.html"
        },
        'bottom-view':{
          template:"<div></div>"
        }
      }
    })
    .state('test', {
      url: '/test',
      templateUrl: 'templates/test.html'
    })
    .state('test.excercise', {
      url: '/excercise/:chapter_id',
      views: {
        'excercise_panel':{
          templateUrl: 'templates/excercise_panel.html',
          controller: 'TestCtrl'
        }
      }
    })
    .state('work', {
      url: '/work',
      templateUrl: 'templates/work.html',
      controller: 'WorkCtrl'
    })
    .state('graph', {
      url: '/graph',
      templateUrl: 'templates/graph.html',
      controller: 'GraphCtrl'
    })
  //$urlRouterProvider.otherwise('/login');

});

scienceclass.controller('RootCtrl', function($scope, $rootScope, $mdDialog, $http, User) {
  $scope.userInfo = User.info;
  User.fetchInfo();
  $rootScope.lan = 'CN';
  $rootScope.headershow = true;
  $scope.goto = function(path) {
    window.location.href = '#/' + path;
  };
  $scope.logout = function() {
    $http.get(__API_ROOT__ + '/center/user/logout')
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
scienceclass.controller('RegisterCtrl', require('./register_controller.js'));
scienceclass.controller('HomeCtrl', require('./home_controller.js'));
scienceclass.controller('StudyCtrl', require('./study_controller.js'));
scienceclass.controller('TestCtrl', require('./test_controller.js'));
scienceclass.controller('ImCtrl', require('./im_controller.js'));
scienceclass.controller('WorkCtrl', require('./work_controller.js'));
scienceclass.service('User', require('./user.js'));
