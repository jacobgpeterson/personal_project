var app = angular.module('pickUpApp');

app.service('orgMatchService' function(){
	this.postMatch = function(message) {
    return $http({
    method: "POST",
    url: '',
    data: {text: message}
  });
  }
})