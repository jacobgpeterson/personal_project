var app = angular.module('pickUpApp');

app.service('matchService', function($scope){
	return {
    	getComments: function(){
    		var dfd = $q.defer();

    		$http({
    			method: 'GET',
    			url: ''
    		}).success(function(data){
    			dfd.resolve(data);
    		});
    		return dfd.promise;
    	},
    	addComment: function(name, comment, date) {
        var dfd = $q.defer();

        $http({
          method: 'POST',
          url: '',
          data: {
          	userName: name,
          	comments: comment,
          	createdAt: date
          }
        }).success(function(data) {
          dfd.resolve(data);
        });

        return dfd.promise;
      	}
    }
})