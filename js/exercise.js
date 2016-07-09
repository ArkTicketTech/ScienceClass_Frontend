var exercise = function ($http, $q) {
  var service = {

    get_exercises: function() {
      var deferred = $q.defer();
      $http.get('/json/exercises.json')
        .success(function (res){
          var ex_list = res;
          deferred.resolve(ex_list);
        })
        .error(function (res){
          deferred.resolve();
        });
      return deferred.promise;
    }
    get_exercise: function(exercise_id) {
      var deffered=$q.defer();
      $http.get('/exercise/'+id)
        .success(function(res) {
          deffered.resolve(res);
        })
    }

    get_test: function(chapter_id)
  }
  return service;
}

module.exports = exercise;
