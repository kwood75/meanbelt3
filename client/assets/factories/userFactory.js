    app.factory('userFactory',['$http',function($http){
        var factory = {};
        factory.Create = function(user,callback){
          $http.post('/user',user).then(function(returned_data){
            var user = returned_data.data;
            factory.user = user
            callback(user)
          })
        }
        factory.GetUser = function(){
          return (factory.user);
        }
        factory.FindUser = function(user,callback){
          $http.post('/finduser',user).then(function(returned_data){
            factory.user = returned_data.data
            callback(returned_data.data)
          })
        }
        return factory;
    }]);