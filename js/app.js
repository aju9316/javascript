(function () {
	'use strict'

	angular.module('app', ['ui.router'])
		.config(routeConfig)
		//.run(templateCache);

	routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function routeConfig ($stateProvider, $urlRouterProvider) {
		$stateProvider

			.state('home', {
				url: '/home',
				templateUrl: 'views/home.html',
				controller: 'HomeController'
			})
			.state('login', {
				url: '/login',
				templateUrl: 'views/login.html',
				controller: 'LoginController'
			})
	}

	// templateCache.$inject = ['$templateCache'];
	// function templateCache ($templateCache) {
	// 	$templateCache.put('views/home.html', '<h1>this is home</h1>');
	// 	$templateCache.put('views/login.html', '<h1>this is login</h1>');
	// }
})();