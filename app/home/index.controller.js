(function () {
	'use strict';

	angular
		.module('app')
		.controller('Home.IndexController', Controller);

	function Controller() {
		var tie = this;

		tie.appName = null;
		initController();

		function initController() {
			// get app name
			tie.appName = "Think Interact Evolve";
		}
	}
})();