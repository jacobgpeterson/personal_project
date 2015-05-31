var app = angular.module('pickUpApp');

app.controller('orgMatchCtrl', function($scope, $http, $q, apiUrl, $location, $window, ngToast){
		$('select[name=sport]').change(function () {
    		if ($(this).val() == 'misc') {
        		$scope.miscSelected = true;
        	}else{
        		$scope.miscSelected = false;
        	}
        });
		$scope.addMatch = function(){
		var dfd = $q.defer();
		var d = new Date(Date.parse($scope.match.date));
		var t = $scope.match.time;

		var newDate = new Date(d.getFullYear(),d.getMonth(),d.getDate(),t.getHours(),t.getMinutes());
		
		$http({
			method: 'POST',
			url: apiUrl + '/match',
			data: {
				sport: $scope.match.sport,
				game: $scope.match.game,
				location: $scope.match.location,
				city: $scope.match.city,
				state: $scope.match.state,
				date: newDate,
				additionalDetails: $scope.match.additionalDetails,
				token: $window.sessionStorage.token,
			}
		}).success(function(data){
			dfd.resolve(data);
			$location.path('#/matchView/' + data._id);
			ngToast.create({
				className: 'success',
				content: '<strong>Success! </strong>Match created!'
			})
		}).error(function(data){
			ngToast.create({
				className: 'danger',
				content: '<strong>Error! </strong>Problem creating match.'
			})
		});
		return dfd.promise;
		}
	
})