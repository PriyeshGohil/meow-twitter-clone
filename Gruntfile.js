module.exports = function(grunt){

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

		sass: {
        dist: {
            files: {
                './public/css/main.css': './public/css/main.scss'
            }
        }
			},

		//specifying the settings for watch
		watch: {
			css: {
				files: './public/css/*.scss',
				tasks: ['sass'],
				options: { spawn:false, event:['all'] },
			},
		},
	});

	// Registering css minification as a default task
	grunt.registerTask( 'default', [ 'watch'] );
}
