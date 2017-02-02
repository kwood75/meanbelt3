app.controller('createController',['$location','$scope','pollFactory','userFactory',function($location,$scope,pollFactory,userFactory){
  $scope.current_user = userFactory.GetUser()

  console.log($scope.current_user);
  $scope.AddPoll = function(poll){
    poll._creator = $scope.current_user._id
    pollFactory.AddPoll(poll, function(result){
      console.log(result);
      $location.path('/dashboard')
    })
  }


}]);