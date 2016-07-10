var HomeCtrl = function ($scope, $http, $state, User, $rootScope, $stateParams) {
  $rootScope.headershow = true;

  $scope.target = $stateParams.typeId;

  $scope.urlgoto = function (target) {
      $state.go("home",{typeId:target});
  }

  $scope.url2goto = function (target) {
      window.location.href = "#/test/excercise/1";
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

  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    $scope.options = {
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          },
          {
            id: 'y-axis-2',
            type: 'linear',
            display: true,
            position: 'right'
          }
        ]
      }
    };

}

module.exports = HomeCtrl;
