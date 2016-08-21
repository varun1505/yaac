(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('yaac.config', [])
      .value('yaac.config', {
          debug: true
      });

  // Modules
  angular.module('yaac.directives', []);
  angular.module('yaac.filters', []);
  angular.module('yaac',
      [
          'yaac.config',
          'yaac.directives',
          'yaac.filters'
      ]);

})(angular);

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
  		templateUrl: '/yaac/src/yaac/directives/yaac.template.html', //TODO: figure out how to get a generic route
  		// replace: true,
  		// transclude: true,
  		link: function($scope, iElm, iAttrs, controller) {
  			console.log('asdf');
  		}
  	};
  });


})(angular);
