var StudyCtrl = function ($scope, $http,$state, User) {
  $scope.submit = function () {
        //todo
        $state.go('study.ppt');
  };
}

module.exports = StudyCtrl;
