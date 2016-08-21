'use strict';

describe('', function() {

  var module;
  var dependencies;
  dependencies = [];

  var hasModule = function(module) {
  return dependencies.indexOf(module) >= 0;
  };

  beforeEach(function() {

  // Get module
  module = angular.module('yaac');
  dependencies = module.requires;
  });

  it('should load config module', function() {
    expect(hasModule('yaac.config')).to.be.ok;
  });

  
  it('should load filters module', function() {
    expect(hasModule('yaac.filters')).to.be.ok;
  });
  

  
  it('should load directives module', function() {
    expect(hasModule('yaac.directives')).to.be.ok;
  });
  

  

});