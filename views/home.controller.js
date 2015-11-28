(function () {
	'use strict'

	angular.module('app')
		.controller('HomeController', HomeController);

	HomeController.$inject = ['$scope'];
	function HomeController ($scope) {
		$scope.name = 'stan';

		setTimeout(function () {
			$scope.name = 'stan shunpike';
			$scope.$apply();
		}, 3000);
	}
})();