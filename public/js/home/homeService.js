var app = angular.module('pickUpApp');

app.service('homeService', function(){
	var gametypes = [
		{text: 'Baseball', link: '#/findMatch/baseball'},
		{text: 'Backetball', link: '#/findMatch/basketball'},
		{text: 'Football', link: '#/findMatch/football'},
		{text: 'Soccer', link: '#/findMatch/soccer'},
		{text: 'Softball', link: '#/findMatch/softball'},
		{text: 'Ultimate Frisbee', link: '#/findMatch/ultimatefrisbee'},
		{text: 'Volleyball', link: '#/findMatch/volleyball'}
	];
	this.getGameType = function(){
		return gametypes;
	}
})