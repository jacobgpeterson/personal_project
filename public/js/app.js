var app = angular.module('pickUpApp', ['ngRoute', 'ngToast', 'ngSanitize']);

app.config(function($routeProvider){
	$routeProvider
	.when('/home', {
		templateUrl:'/js/home/home.html',
		controller:'homeCtrl' 
	})
	.when('/createAccount', {
		templateUrl:'/js/createAccount/createAccount.html',
		controller:'createAccountCtrl'
	})
	.when('/organizeMatch', {
		templateUrl:'/js/organizeMatchInput/orgMatch.html',
		controller:'orgMatchCtrl'
	})
	.when('/findMatch/:selectType', {
		templateUrl:'/js/findGame/findGame.html',
		controller:'findGameCtrl'
	})
	.when('/matchView/:id', {
		templateUrl:'/js/matchView/matchView.html',
		controller:'matchViewCtrl'
	})
	.when('/myMatches', {
		templateUrl: '/js/myMatches/myMatch.html',
		controller: 'myMatchCtrl'
	})
	.otherwise({
		redirectTo: '/home'
	})
}).constant("apiUrl","http://localhost:9091");