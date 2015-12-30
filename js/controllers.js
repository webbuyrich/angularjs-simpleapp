var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope){

	$scope.author = {

		'name' 		: 'Richard Peterson',
		'title'		: 'Main Author',
		'company'	: 'Focused And Creative'
	}

});