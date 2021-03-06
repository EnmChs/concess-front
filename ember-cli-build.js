/* eslint-env node */
'use strict';
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {

  });
  //app.import('bower_components/bootstrap/dist');
  app.import('bower_components/bootstrap/dist/js/bootstrap.js');
  app.import('bower_components/jquery/dist/jquery.min.js');
  app.import('bower_components/moment/min/moment.min.js');

  app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
  app.import('bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js');
  app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
  app.import('bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css');
  
  


  var fontawesome = new funnel('bower_components/font-awesome/fonts', {
    srcDir: '/',
    destDir: 'fonts'
  });

  var bootstrap = new funnel('bower_components/bootstrap/fonts', {
    srcDir: '/',
    destDir: 'fonts'
  });

  var merged = mergeTrees([app.toTree(), fontawesome, bootstrap], {
      overwrite: true
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree(merged);
};
