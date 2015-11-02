var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl : 'views/main.html',
		controller  : 'homeController'
	})
	.when('/home', {
		templateUrl : 'views/main.html',
		controller  : 'homeController'
	})
	.when('/connie', {
		templateUrl : 'views/connie.html',
		controller  : 'newpostController'
	})
    .when('/anne', {
		templateUrl : 'views/anne.html',
		controller  : 'newpostController'
	})
	.when('/muriel', {
		templateUrl : 'views/muriel.html',
		controller  : 'blogdetailController'
	});
}]);
