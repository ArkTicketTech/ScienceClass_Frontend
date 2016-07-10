var user = function ($http, $q) {
  var service = {
    info: {
      id: 0,
      isLogin: false,
      nickname: 'xx',
      username: 'xx'
    },
    fetchInfo: function() {
      var deferred = $q.defer();
      $http.get(__API_ROOT__+'/center/user/-1/')
        .success(function (res){
          //alert('fetch info success');
          service.info.isLogin = true;
          service.info.id = res.id;
          service.info.nickname = res.nickname;
          service.info.username = res.username;
          deferred.resolve({isLogin: true});
        })
        .error(function (res){
          deferred.resolve({isLogin: false});
        });
      return deferred.promise;
    },
    login :function(user) {
      var deferred = $q.defer();
      $http({
        method  : 'POST',
        url     : __API_ROOT__+'/center/login/',
        data    : $.param(user),
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
      .success(function (res){
        alert('success'+res);
        alert('login success');
        User.fetchInfo().then(function(){
          deffered.resolve();
        });
      })
      .error(function (res){
        alert(res);
        deffered.reject(res);
      });
    },
    register :function(user) {
      var deferred = $q.defer();
      $http({
        method  : 'POST',
        url     : __API_ROOT__+'/center/register/',
        data    : $.param(user),
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
      .success(function (res){
        alert('login success');
        User.fetchInfo().then(function(){
          deffered.resolve();
        });
      })
      .error(function (res){
        alert(res);
        deffered.reject(res);
      });
    }
  }
  return service;
}

module.exports = user;
