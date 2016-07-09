var TestCtrl = function ($scope, $http, User, $rootScope) {

  $scope.user = {};
  $rootScope.headershow = false;

  $scope.chapter = {name: 'chapter1'};
  $scope.questions = [
  	{name: 'here is name', content: ['aaaa','bbbbb','cccc','dddd'], answer: 0},
  	{name: 'here is name2', content: ['aaaa','bbbbb','cccc','dddd'], answer: 2},
    {name: 'here is name3', content: ['aaaa','bbbbb','cccc','dddd'], answer: 0},
    {name: 'here is name4', content: ['aaaa','bbbbb','cccc','dddd'], answer: 2},
    {name: 'here is name5', content: ['aaaa','bbbbb','cccc','dddd'], answer: 3},
  ];

  $scope.curr = 0;
  $scope.total = $scope.questions.length;
  $scope.cQuestion = $scope.questions[$scope.curr];  
  $scope.abcd = ['A','B','C','D'];
  $scope.useranswer = new Array([$scope.total]);
  $scope.answer = -1;

  $scope.addcur = function(){
    $scope.useranswer[$scope.curr] = $scope.answer;
    if($scope.curr < $scope.total-1){
      $scope.curr ++; 
      $scope.cQuestion = $scope.questions[$scope.curr]; 
      //$scope.answer = -1;
    }
  }

  $scope.mincur = function(){
    $scope.useranswer[$scope.curr] = $scope.answer;
    if($scope.curr >= 1){
      $scope.curr --;
      $scope.cQuestion = $scope.questions[$scope.curr]; 
      //$scope.answer = -1;
    }
  }

  $scope.correctnum = 0;
  $scope.submit = function(){
    $scope.useranswer[$scope.curr] = $scope.answer;
    for ( var index in $scope.useranswer ) {
      if( $scope.useranswer[index] == $scope.questions[index].answer ) $scope.correctnum++;
    }
    alert("恭喜您答对了"+$scope.correctnum+"道题目");
  }

}


module.exports = TestCtrl;
