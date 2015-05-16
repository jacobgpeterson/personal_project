var app = angular.module('pickUpApp')

app.controller('matchViewCtrl', function($scope, $http, $routeParams, apiUrl){
    var getMatch = function(matchId){
		$http.get(apiUrl + '/view/' + matchId).success(function(data){
			console.log(angular.toJson(data));
			$scope.item = data[0];
		}).error(function(data){
			console.log("Error: " + angular.toJson(data));
		});	
	};
	getMatch($routeParams.id);


  //    getComments: function(){
  //       var dfd = $q.defer();

  //       $http({
  //         method: 'GET',
  //         url: '/view'
  //       }).success(function(data){
  //         dfd.resolve(data);
  //       });
  //       return dfd.promise;
  //       console.log(data);
  //     },
  //     addComment: function(name, comment, date) {
  //       var dfd = $q.defer();

  //       $http({
  //         method: 'POST',
  //         url: '',
  //         data: {
  //           // user: name,
  //           comments: comment,
  //           createdAt: date
  //         }
  //       }).success(function(data) {
  //         dfd.resolve(data);
  //       });

  //       return dfd.promise;
  //     }
  //   setInterval(function(){
  //   $scope.getComments();
  // }, 1500)
});