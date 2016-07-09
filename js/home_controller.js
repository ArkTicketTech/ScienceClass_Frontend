var HomeCtrl = function ($scope, $http,$state, User) {

  $scope.submit = function () {
        //todo
        $state.go('study');
  };
}

module.exports = HomeCtrl;
