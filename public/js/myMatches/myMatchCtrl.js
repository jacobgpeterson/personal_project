var app = angular.module('pickUpApp');

app.controller('myMatchCtrl', function($scope, $routeParams, $http, apiUrl){

	var getGames = function(userId){
		$http.get(apiUrl + '/mymatch/' + userId).success(function(data){
			$scope.items = data;
		});
	};
});