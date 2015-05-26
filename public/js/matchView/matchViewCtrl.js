var app = angular.module('pickUpApp')

app.controller('matchViewCtrl', function($scope, $http, $routeParams, $window, $q, apiUrl){
  var getMatch = function(matchId){
		$http.get(apiUrl + '/view/' + matchId).success(function(data){
			console.log(angular.toJson(data));
			$scope.item = data;
      // document.getElementById('if1').href ='https://www.google.com/maps/embed/v1/place?key=AIzaSyBZ8sfZZI9FGmS4-kgf439jbd2emnzwAqw&q=vancouver';
		}).error(function(data){
			console.log("Error: " + angular.toJson(data));
		});	
  };
	getMatch($routeParams.id);
  
  $scope.addComment = function(){
    var dfd = $q.defer();
    $http({
      method: 'POST',
      url: apiUrl + '/comment',
      data: {
        comments: $scope.comment.comment,
        createdAt: $scope.date,
        token: $window.sessionStorage.token,
      }
    }).success(function(data){
      console.log("Success: "+ angular.toJson(data));
      dfd.resolve(data);
    }).error(function(data){
      console.log("Error: "+ angular.toJson(data));
    });
    return dfd.promise;
  }
  // var getComments = function(matchid){
  //   $http.get(apiUrl + '/getComment' + matchId).success(function(data){
  //     console.log(angular.toJson(data));
  //     $scope.addedcomments = data;
  //   }).error(function(data){
  //     console.log("Error: " + angular.toJson(data));
  //   })
  // }
  // setInterval(function(){
  //   $scope.getComments();
  // }, 1500)
});