var LoginCtrl = function ($scope, $http, User, $rootScope) {

  $scope.user = {};
  $rootScope.headershow = false;

  $scope.submit = function () {
        window.location.href = '#/home';
  };
}

module.exports = LoginCtrl;
