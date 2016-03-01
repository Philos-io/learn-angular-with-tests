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
    preprocessors: {
      'templates/*.html': function(file){
        return require('wallaby-ng-html2js-preprocessor').transform(file, {
          // strip this from the file path
          stripPrefix: 'public/',
          stripSufix: '.ext',
          // prepend this to the
          prependPrefix: 'served/',
          // setting this option will create only a single module that contains templates
          // from all the files, so you can load them all with module('foo')
          // moduleName: 'templates'
        });
      }
    }
  };
};



// // strip this from the file path
// stripPrefix: 'public/',
// stripSufix: '.ext.js',
// // prepend this to the
// prependPrefix: 'serve/',
//
// // or define a custom transform function
// cacheIdFromPath: function(filepath) {
// return cacheId;
// },
