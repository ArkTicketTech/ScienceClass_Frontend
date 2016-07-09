var TestCtrl = function ($scope, $http, User, $rootScope) {

  $scope.user = {};
  $rootScope.headershow = false;

  $scope.knowledges = [
  	{name: 'nam'},
  	{name: 'ne2'},
  	{name: 'name3'},
  	{name: 'name1'},
  	{name: 'name2'},
  	{name: 'name3'},
  	{name: 'name1'},
  	{name: 'n'},
  	{name: 'name3'},
  	{name: 'name1'},
  	{name: 'name2'},
  	{name: 'name3'},
  	{name: 'name1'},
  	{name: 'name2'},
  	{name: 'name3'},
  	{name: 'name1'},
  	{name: 'name2'},
  	{name: 'name3'},
  ];

  $scope.cQuestion = $scope.knowledges[0];  

  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };
}


module.exports = TestCtrl;
