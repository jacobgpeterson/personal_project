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
			content: 'Logout successful.'
		})
	};
	$scope.mainLogin = function(toaster){
		$http({
			method: 'POST',
			url: apiUrl + '/login',
			data: {
				username: $scope.login.username,
				password: $scope.login.password,
			}
		}).success(function(data, status, headers, config){
			$window.sessionStorage.token = data.token;
        	$scope.message = 'Welcome';
        	$scope.loggedIn = true;
			ngToast.create({
  				className: 'success',
  				content: 'Login successful.'
			});
		}).error(function(data, status, headers, config){
			$scope.message = "Error: Invalid username or password";
			delete $window.sessionStorage.token;
			$scope.loggedIn = false;
			ngToast.create({
  				className: 'danger',
  				content: 'Invalid username or password.'
			});
		})
	};
});


