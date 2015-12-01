/*************************************************
 * Function: spinner 

if call spinner, let attrs.spCall be true

 *************************************************/
(function(window, angular, undefined) {
	'use strict';

	if (!angular) {
		return;
	}
	var spinner = angular.module('spinner', []);

	spinner.directive('spinner', function() {
		return {
			restrict: 'E',
			replace: true,
			transclude: false,
			scope: true,
			controller: function($scope, $element, $attrs) {

			},
			templateUrl: 'componets-spinner.html',
			link: function(scope, element, attrs) {
				scope.spCall = attrs.spCall;
				// init
				if(attrs.spCall ===' true')
					scope.spCall = true;
			}

		};
	});
	

})(window, window.angular);
