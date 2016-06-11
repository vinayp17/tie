(function () {
	'use strict';
	angular
		.module('app', ['ui.router'])
		.config(config)

	function config($stateProvider, $urlRouterProvider) {
		//default route
		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'home/index.html',
				controller: 'Home.IndexController',
				controllerAs: 'tie'
			});

	}

	function run($http, $rootScope, $window) {
		// add JWT token as default auth header
		$http.defaults.headers.common['Authorization'] = 'Bearer' + $window.jwtToken;

	}

	//manually bootstrap angular after jwt is retrieved from the server
	$(function () {
		// get JWT token from server
		$.get('/app/token', function(token){
			window.jwtToken = token;
			angular.bootstrap(document, ['app']);
		});
	});

})();