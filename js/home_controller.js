var HomeCtrl = function ($scope, $http, $state, User, $rootScope, $stateParams) {
  $rootScope.headershow = true;

  $scope.target = $stateParams.typeId;

  $scope.urlgoto = function (target) {
      $state.go("home",{typeId:target});
  }

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
