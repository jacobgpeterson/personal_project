var app = angular.module('pickUpApp');

app.controller('createAccountCtrl', function($scope, $http, $q, apiUrl, $location, ngToast){

	$scope.addUser = function(){
		$http({
			method: 'POST',
			url: apiUrl + '/user',
			data: {
				username: $scope.reg.username.toLowerCase(),
				email: $scope.reg.email,
				password: $scope.reg.password,
			}
		}).success(function(data){
			$location.path('#/home')
			ngToast.create({
				className: 'success',
				content: '<strong>Success! </strong>Account created!'
			})
		}).error(function(data){
			console.log("Error: "+ angular.toJson(data));
			ngToast.create({
				className: 'danger',
				content: '<strong>Error! </strong>Problem creating account.'
			})
		});
	}
});