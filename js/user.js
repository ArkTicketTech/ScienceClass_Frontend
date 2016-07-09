var user = function ($http, $q) {
  var service = {
    info: {
      id: 0,
      isLogin: false,
      role: 'patient',
    },
    chooseFile: {
      id: 0,
      url: ''
    },
    fetchInfo: function() {
      var deferred = $q.defer();
      $http.get(__API_ROOT__ + '/api/v1/user/-1')
        .success(function (res){
          service.info.isLogin = true;
          service.info.id = res.id;
          service.info.role = res.role;
          deferred.resolve({isLogin: true});
        })
        .error(function (res){
          deferred.resolve({isLogin: false});
        });
      return deferred.promise;
    }
  }
  return service;
}

module.exports = user;
