var LoginCtrl = function ($scope, $http, User, $rootScope) {

  $scope.user = {};
  $rootScope.headershow = false;

  $scope.submit = function () {
        //todo
        $state.go('home');
        //window.location.href = '#/home';
  };
}

module.exports = LoginCtrl;
