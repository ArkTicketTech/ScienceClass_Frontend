var LoginCtrl = function ($scope, $http, User) {

  $scope.user = {};
  $scope.submit = function () {
        window.location.href = '#/home';
  };
}

module.exports = LoginCtrl;
