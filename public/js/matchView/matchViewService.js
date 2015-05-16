var app = angular.module('pickUpApp');

app.service('matchService', function($scope, matchService){ 
  $scope.comments = matchService.getComments().then(function(data) {
    $scope.comments = data;
  });
  $scope.addComment = function() {
    matchService.addComment($scope.newComment).then(function(data) {
      $scope.comments = data;
      $scope.newComment = '';
    });
  };
});