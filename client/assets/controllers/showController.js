app.controller('showController',['$routeParams','$scope','$location','userFactory','pollFactory',function($routeParams,$scope,$location,userFactory,pollFactory){
  var id = $routeParams.id
  var index = function(){
    pollFactory.GetPoll(id,function(result){
    console.log(result+"!!!!");
    $scope.poll = result;
    console.log("!!",$scope.poll)
  })};
  index();
  $scope.Vote = function(id,vote_id){
    pollFactory.Vote(id,vote_id);
    index();
  }

}]);