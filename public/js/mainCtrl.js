var app = angular.module('pickUpApp');


app.controller('mainCtrl', function($scope, $http, apiUrl){
	console.log('mainCtrl connected');
	$scope.mainLogin = function(){
		console.log('function hit');
		$http({
			method: 'POST',
			url: apiUrl + '/login',
			data: {
				username: $scope.login.username,
				password: $scope.login.password,
			}
		}).success(function(data){
			console.log("Success: " + angular.toJson(data));
		}).error(function(data){
			console.log("Error: " + angular.toJson(data));
		})
	}
})