'use strict';

module.exports = function(wallaby){

  let babelCompiler = wallaby.compilers.babel({
    'presets': ['es2015']
  });

  return {
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/index.js',
      'src/*.js',
      'templates/*.html'
    ],

    tests: [
      'test/*.spec.js'
    ],
    compilers: {
      'test/*.spec.js': babelCompiler
    }
  };
};
