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
