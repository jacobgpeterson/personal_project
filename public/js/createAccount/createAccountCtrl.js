var app = angular.module('pickUpApp');

app.controller('createAccountCtrl', function($scope, $http, $q, apiUrl, $location){

	$http({
		method: 'POST',
		url: apiUrl + '/user',
		data: {
			username: $scope.user.name,
			email: $scope.user.email,
			password: $scope.user.password,
		}
	}).success(function(data){
		console.log("Success: " + angular.toJson(data));
		dfd.resolve(data);
		$location.path('#/home')
	}).error(function(data){
		console.log("Error: "+ angular.toJson(data));
	});
	return dfd.promise;
});