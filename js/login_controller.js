var LoginCtrl = function ($scope, $http, User, $rootScope) {

  $rootScope.headershow = false;

  User.fetchInfo().then(function (res){
    if (User.info.isLogin) {
      window.location.href = '#/home';
    }
  });
  $scope.user = {};
  $scope.submit = function () {
        //User.login($scope.user).then(function(){
        //  window.location.href = '#/home';
        //});
        //window.location.href = '#/home';

        $http({
          method  : 'POST',
          url     : __API_ROOT__+'/center/login/',
          data    : $.param($scope.user),
          headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
              })
        .success(function (res){
          alert('login success');
          User.fetchInfo().then(function(){
            window.location.href = '#/home';

          });
        })
        .error(function (res){
          alert('login error');
        });
  };
}

module.exports = LoginCtrl;
