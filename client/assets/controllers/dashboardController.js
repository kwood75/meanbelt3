app.controller('dashboardController',['$scope','pollFactory','userFactory',function($scope,pollFactory,userFactory){
  var index = function(){
    pollFactory.index(function(returned_data){
      $scope.polls = returned_data;
    });
  };
  $scope.polls = []
  index();

  $scope.current_user = userFactory.GetUser();
  $scope.delete = function(poll){
    pollFactory.Delete(poll, function(){
      index();
    });
  }
}]);