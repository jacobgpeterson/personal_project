var app = angular.module('pickUpApp');


app.controller('mainCtrl', function($scope, $http, $window, $rootScope, apiUrl, ngToast){
	$scope.user = (username = '');
	$scope.loggedIn = !!$window.sessionStorage.token;
	$scope.message = '';
	$scope.logout = function(){
		delete $window.sessionStorage.token;
		$scope.loggedIn = false;
		ngToast.create({
			className: 'success',
			content: '<strong>Success! </strong>You are now logged out.'
		})
	};
	$scope.mainLogin = function(toaster){
		$http({
			method: 'POST',
			url: apiUrl + '/login',
			data: {
				username: $scope.login.username.toLowerCase(),
				password: $scope.login.password,
			}
		}).success(function(data, status, headers, config){
			$window.sessionStorage.token = data.token;
        	$scope.message = 'Welcome';
        	$scope.loggedIn = true;
			ngToast.create({
  				className: 'success',
  				content: '<strong>Success! </strong>You are now logged in.'
			});
		}).error(function(data, status, headers, config){
			$scope.message = "Error: Invalid username or password";
			delete $window.sessionStorage.token;
			$scope.loggedIn = false;
			ngToast.create({
  				className: 'danger',
  				content: '<strong>Error! </strong>Invalid username or password.'
			});
		})
	};
});


