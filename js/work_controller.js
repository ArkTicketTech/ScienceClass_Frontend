var WorkCtrl = function ($scope, $http,$state) {
    $scope.works=[];
    $http({
      method  : 'GET',
      url     : 'http://172.16.32.218:8000/classroom/exercises/1/5/'
            })
    .success(function (result){
      result.forEach(function(work_str) {
        var work = JSON.parse(work_str);
        console.log(work);
        $scope.works.push(work);
      });
      $scope.cur_index = 0;
      $scope.cur_work = $scope.works[$scope.cur_index];
    })
    .error(function (res){
      alert(res);
    });

    $scope.pre = function() {
      if ($scope.cur_index>0) {
        $scope.cur_index = $scope.cur_index -1;
        $scope.cur_work = $scope.works[$scope.cur_index];
      } else {
        $scope.cur_index = $scope.works.length-1;
        $scope.cur_work = $scope.works[$scope.cur_index];
      }
    }
    $scope.next = function() {
      if ($scope.cur_index<$scope.works.length-1) {
        $scope.cur_index = $scope.cur_index +1;
        $scope.cur_work = $scope.works[$scope.cur_index];
      } else {
        $scope.cur_index = 0;
        $scope.cur_work = $scope.works[$scope.cur_index];
      }
    }



    $scope.submit = function() {
      alert("提交成功");
    }
}

module.exports = WorkCtrl;
