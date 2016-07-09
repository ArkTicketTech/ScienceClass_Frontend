var WorkCtrl = function ($scope, $http,$state) {
    $http({
      method  : 'GET',
      url     : 'http://172.16.32.218:8000/classroom/exercises/1/5/'
            })
    .success(function (res){
        console.log(res);
        $scope.works = res;
    })
    .error(function (res){
      alert(res);
    });

    $scope.works = [{content:'<p>test1</p>'},{content:'<div>test2</div>'}];

    $scope.submit = function() {
      alert("提交成功");
    }
}

module.exports = WorkCtrl;
