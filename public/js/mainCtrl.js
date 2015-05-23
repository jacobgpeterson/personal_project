var app = angular.module('pickUpApp');


app.controller('mainCtrl', function($scope, $http, $window, apiUrl){
	$scope.user = (username = '');
	$scope.message = '';
	$scope.mainLogin = function(){
		$http({
			method: 'POST',
			url: apiUrl + '/login',
			data: {
				username: $scope.login.username,
				password: $scope.login.password,
			}
		}).success(function(data, status, headers, config){
			console.log("Success: " + angular.toJson(data));
			$window.sessionStorage.token = data.token;
			$window.sessionStorage.user = data.user;
			console.log($window.sessionStorage);
        	$scope.message = 'Welcome';
		}).error(function(data, status, headers, config){
			console.log("Error: " + angular.toJson(data));
			$scope.message = "Error: Invalid username or password";
			delete $window.sessionStorage.token;
			$scope.message = 'Error: Invalid username or password';
		})
	}
})