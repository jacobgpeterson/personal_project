var app = angular.module('pickUpApp')

app.controller('matchViewCtrl', function($scope, $http, $routeParams, $window, $q, apiUrl){
  
  var getMatch = function(matchId){
		$http.get(apiUrl + '/view/' + matchId).success(function(data){
			console.log(angular.toJson(data));
			$scope.item = data;
		}).error(function(data){
			console.log("Error: " + angular.toJson(data));
		});	
  };
	getMatch($routeParams.id);

  $scope.addRsvp = function(){
    var dfd = $q.defer();
    $http({
      method: 'POST',
      url: apiUrl + '/rsvp',
      data: {
        token: $window.sessionStorage.token,
        matchId: $routeParams.id,
      }
    }).success(function(data){
      console.log("Success: "+angular.toJson(data));
      dfd.resolve(data);
    }).error(function(data){
      console.log("Error: "+angular.toJson(data));
    });
    return dfd.promise;
  }

  $scope.addComment = function(){
    var dfd = $q.defer();
    $http({
      method: 'POST',
      url: apiUrl + '/comment',
      data: {
        comments: $scope.comment.comment,
        createdAt: $scope.date,
        token: $window.sessionStorage.token,
        matchId: $routeParams.id,
      }
    }).success(function(data){
      console.log("Success: "+ angular.toJson(data));
      dfd.resolve(data);
    }).error(function(data){
      console.log("Error: "+ angular.toJson(data));
    });
    return dfd.promise;
  }

  $(document).ready(function(){
    $("gamemap").each(function(){
      var embed ="<iframe frameborder='0' style='border:0' src='https://maps.google.com/maps?&amp;q="+ encodeURIComponent( $(this).text() ) +"&amp;output=embed'></iframe>";
      $(this).html(embed);
    });
  });
  // $scope.limit = 7;

  // $scope.loadMore = function() {
  //   $scope.limit = $scope.items.length
  // }
});