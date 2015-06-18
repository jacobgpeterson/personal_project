var app = angular.module('pickUpApp');

app.controller('createAccountCtrl', function($scope, $http, $q, apiUrl, $location, $window, ngToast){
	checkPassword = function() {
        var password1 = document.getElementById("password1").value;
        var password2 = document.getElementById("password2").value;
        if (password1 != password2) {
            //alert("Passwords Do not match");
            document.getElementById("password1").style.borderColor = "#E34234";
            document.getElementById("password2").style.borderColor = "#E34234";
        }
        else {
            alert("Passwords Match!!!");
            document.getElementById("regForm").submit();
        }
    }
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
			$location.path('#/home');
			$window.sessionStorage.token = data.token;
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