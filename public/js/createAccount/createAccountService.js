var app = angular.module('pickUpApp');

app.service('createAccountCtrl', function($scope){
	return {
		addUser: function(email, name, pHash){
		var dfd = $q.defer();

		$http({
			method: 'POST',
			url: '',
			data: {
				email: email,
				username: name,
				password: pHash
			}
		}).success(function(data){
			dfd.resolve(data);
		});

		return dfd.promise;
		}
	}
})