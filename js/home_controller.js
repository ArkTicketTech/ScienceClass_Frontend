var HomeCtrl = function ($scope, $http,$state, User, $rootScope) {
  $rootScope.headershow = true;

  $scope.submit = function () {
        //todo
        window.location.href = '#/study/studyppt';
        //$state.go('study');
  };

  $scope.check = function () {
        //todo
        window.location.href = '#/home';
        //$state.go('study');
  };

}

module.exports = HomeCtrl;
