var HomeCtrl = function ($scope, $http,$state, User) {

  $scope.ttt=-1;
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
