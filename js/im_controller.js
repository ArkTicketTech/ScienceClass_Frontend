var ImCtrl = function ($scope, $http,$state) {
    $http({
      method  : 'GET',
      url     : 'http://172.16.32.218:8000/classroom/learn/1/'
            })
    .success(function (res){
        alert(res);
        $scope.ppt_div = res.ppt;
    })
    .error(function (res){
      alert(res);
    });
}

module.exports = ImCtrl;
