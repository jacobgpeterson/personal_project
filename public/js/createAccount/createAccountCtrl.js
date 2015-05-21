var app = angular.module('pickUpApp');

app.controller('createAccountCtrl', function($scope, $http, $q, apiUrl, $location){

	$scope.addUser = function(){
		$http({
			method: 'POST',
			url: apiUrl + '/user',
			data: {
				username: $scope.reg.username,
				email: $scope.reg.email,
				password: $scope.reg.password,
			}
		}).success(function(data){
			console.log("Success: " + angular.toJson(data));
			$location.path('#/home')
		}).error(function(data){
			console.log("Error: "+ angular.toJson(data));
		});
	}
});