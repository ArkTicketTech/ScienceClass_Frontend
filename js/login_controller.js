var LoginCtrl = function ($scope, $http, $state,User) {

  $scope.submit = function () {
        //todo
        $state.go('home');
        //window.location.href = '#/home';
  };
}

module.exports = LoginCtrl;
