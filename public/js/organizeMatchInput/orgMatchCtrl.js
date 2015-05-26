var app = angular.module('pickUpApp');

app.controller('orgMatchCtrl', function($scope, $http, $q, apiUrl, $location, $window){
		$scope.addMatch = function(){
		var dfd = $q.defer();
		var d = new Date(Date.parse($scope.match.date));
		var t = $scope.match.time;

		var newDate = new Date(d.getFullYear(),d.getMonth(),d.getDate(),t.getHours(),t.getMinutes());
		console.log (newDate);
		
		$http({
			method: 'POST',
			url: apiUrl + '/match',
			data: {
				sport: $scope.match.sport,
				location: $scope.match.location,
				city: $scope.match.city,
				state: $scope.match.state,
				date: newDate,
				additionalDetails: $scope.match.additionalDetails,
				token: $window.sessionStorage.token,
			}
		}).success(function(data){
			console.log("Success: " + angular.toJson(data));
			dfd.resolve(data);
			$location.path('#/matchView/' + data._id)
		}).error(function(data){
			console.log("Error: "+ angular.toJson(data));
		});
		return dfd.promise;
		}
	
})