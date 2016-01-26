/**
 * @author Samuele Artuso <samuele.a@gmail.com>
 */

'use strict';

 module.exports = function(grunt) {

   // Project configuration.
   grunt.initConfig({

        jshint: {
            options: {
              jshintrc: '.jshintrc'
            },
            all: [ 'Gruntfile.js', 'index.js', 'app.js', 'settings.js', 'lib/*.js', 'routes.js', 'test/*.js' ]
        }
    });

    grunt.loadNpmTasks('grunt-bookmarklet-thingy');

    // Default to tasks to run with the "grunt" command.
    grunt.registerTask('default', [ 'bookmarklet' ]);
};
