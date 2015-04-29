var app = angular.module('pickUpApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/home', {
		templateUrl:'js/home/home.html',
		controller:'homeCtrl' 
	})
	.when('/createAccount', {
		templateUrl:'js/createAccount/createAccount.html',
		controller:'createAccountCtrl'
	})
	.when('/organizeMatch', {
		templateUrl:'js/organizeMatchInput/orgMatch.html',
		controller:'orgMatchCtrl'
	})
	.when('/findMatch/:selectType', {
		templateUrl:'js/findGame/findGame.html',
		controller:'findGameCtrl'
	})
	.when('/matchView', {
		templateUrl:'js/matchView/matchView.html',
		controller:'matchViewCtrl'
	})
	.otherwise({
		redirectTo: '/home'
	})
})