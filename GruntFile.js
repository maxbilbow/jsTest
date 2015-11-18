/**
 * Created by bilbowm on 17/11/2015.
 */
module.exports = function( grunt ){

    // tell grunt to load jshint task plugin.
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // configure tasks
    grunt.initConfig({
        jshint: {
            files: [
                'GruntFile.js',
                'src/main/resources/javascript/**/*.js',
                'src/test/javascript/**/*.js'
            ],
            options: {
                ignores: [
                    'src/main/resources/javascript/lib/**/*.js'
                ]
            }
        }
        // more plugin configs go here.

    });
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-contrib-requirejs');
    //grunt.loadNpmTasks('grunt-karma');
    //grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-contrib-compass');
    //grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.loadNpmTasks('grunt-contrib-clean');
    //grunt.loadNpmTasks('grunt-karma-sonar');
    //grunt.loadNpmTasks('grunt-jsdoc');
    //grunt.loadNpmTasks('grunt-docco');
    grunt.registerTask('default',['jshint']);

};