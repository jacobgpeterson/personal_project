var app = angular.module('pickUpApp');

app.controller('orgMatchCtrl', function($scope, $http, $q, apiUrl){
	console.log('orgMatch shiz!');
	
		$scope.addMatch = function(){
		var dfd = $q.defer();
		console.log('function hit!')
		var d = $scope.match.date;
		var t = $scope.match.time;
		
		var newDate = new Date(d.getFullYear(),d.getMonth(),d.getDate(),t.getHours(),t.getMinutes());
		console.log (newDate);
		
		$http({
			method: 'POST',
			url: apiUrl + '/match',
			data: {
				// user: name,
				sport: $scope.match.sport,
				location: $scope.match.location,
				city: $scope.match.city,
				state: $scope.match.state,
				date: newDate,
				additionalDetails: $scope.match.additionalDetails,
			}
		}).success(function(data){
			console.log("Hazzah: " + angular.toJson(data));
			dfd.resolve(data);
		}).error(function(data){
			console.log("Error: "+ angular.toJson(data));
		});
		return dfd.promise;
		}
	
})