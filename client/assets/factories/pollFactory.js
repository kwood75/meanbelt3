    app.factory('pollFactory',['$http',function($http){
      function pollFactory(){
        var _this = this;
        this.AddPoll = function(poll, callback){
          $http.post('/poll',poll).then(function(returned_data){
            console.log("after add http request",returned_data.data);
            callback(returned_data.data);
          })
        }
        this.index = function(callback){
          $http.get('/polls').then(function(returned_data){
            polls = returned_data.data;
            callback(polls);
          });
        };
        this.GetPoll = function(id, callback){
          $http.get(`/get/poll/${id}`).then(function(returned_data){
            console.log(returned_data.data);
            callback(returned_data.data);
          })
        };
        this.Vote = function(id,vote_id){
          $http.patch(`/poll/${id}/${vote_id}`).then(function(returned_data){
            console.log(returned_data);
          })
        };
        this.Delete = function(poll, callback){
          $http.delete(`/polls/${poll._id}`).then(function(returned_data){
            console.log(returned_data);
            callback();
          })
        }
      }
      return new pollFactory();
    }])