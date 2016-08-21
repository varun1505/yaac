(function (angular) {

  angular.module('yaac.directives')
  .directive('yaac', function(){
  	// Runs during compile
  	return {
  		// name: '',
  		// priority: 1,
  		// terminal: true,
  		// scope: {}, // {} = isolate, true = child, false/undefined = no change
  		controller: function($scope, $element, $attrs, $transclude) {},
  		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
  		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
  		// template: '',
  		templateUrl: '/yaac/directives/yaac.template.html',
  		// replace: true,
  		// transclude: true,
  		link: function($scope, iElm, iAttrs, controller) {
  			console.log('asdf');
  		}
  	};
  });


})(angular);
