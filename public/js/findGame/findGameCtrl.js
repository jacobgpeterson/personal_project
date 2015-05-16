var app = angular.module('pickUpApp');

app.controller('findGameCtrl', function($scope, $routeParams, $http, apiUrl){
	console.log('findGame connected');
	if($routeParams.selectType === 'baseball'){
		$scope.gameType = 'Baseball';
	} else if($routeParams.selectType === 'basketball'){
		$scope.gameType = 'Basketball';
	} else if($routeParams.selectType === 'football'){
		$scope.gameType = 'Football';
	}  else if($routeParams.selectType === 'soccer'){
		$scope.gameType = 'Soccer';
	} else if($routeParams.selectType === 'softball'){
		$scope.gameType = 'Softball';
	} else if($routeParams.selectType === 'ultimatefrisbee'){
		$scope.gameType = 'Ultimate Frisbee';
	} else if($routeParams.selectType === 'volleyball'){
		$scope.gameType = 'Volleyball';
	} else if($routeParams.selectType === 'misc'){
		$scope.gameType = 'Misc';
	}; 


	var getGames = function(gameType){
		$http.get(apiUrl + '/find/' + gameType).success(function(data){
			console.log(angular.toJson(data));
			$scope.items = data;
		});
	};


	getGames($scope.gameType.toLowerCase());
});