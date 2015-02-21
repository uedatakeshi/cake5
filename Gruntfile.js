module.exports = function(grunt) {

	require('time-grunt')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		phpunit: {
			classes: {
				dir: 'tests/TestCase/'
			},
			options: {
				bin: 'vendor/bin/phpunit',
				bootstrap: 'tests/bootstrap.php',
				colors: true
			}
		},
		phpcs: {
			application: {
				dir: ['src/']
			},
			options: {
				bin: 'vendor/bin/phpcs',
				standard: 'CakePHP'
			}
		},
		browserify : {
			dist : {
				src : 'src/assets/scripts/main.js',
				dest : 'webroot/js/build.js'  // 出力するファイル名
			}
		},
		simplemocha: {
			options: {
				ui: 'bdd',
				reporter: 'nyan'
			},
			all: { src: ['tests/scripts/**/*.js'] }
		},
		jshint: {
			options: {
				jshintrc: true
			},
			files: ['src/assets/**/*.js', 'tests/scripts/**/*.js']
		},
		uglify: {
			my_target: {
				options: {
					sourceMap: true
				},
				files: {
					'webroot/js/build.min.js': ['webroot/js/build.js']
				}
			}
		},
		watch: {
			phpunit: {
				files: ['src/**/*.php', 'src/**/*.ctp'],
				tasks: ['phpunit'],
				options: {
					spawn: false,
				},
			},
			phpcs: {
				files: ['src/**/*.php'],
				tasks: ['phpcs'],
				options: {
					spawn: false,
				},
			},
			browserify: {
				files: ['src/assets/**/*.js'],
				tasks: ['browserify'],
				options: {
					spawn: false,
				},
			},
			simplemocha: {
				files: ['src/assets/**/*.js', 'tests/scripts/**/*.js'],
				tasks: ['simplemocha', 'jshint', 'uglify'],
				options: {
					spawn: false,
				},
			},
		}
	});

  grunt.loadNpmTasks('grunt-phpunit');
  grunt.loadNpmTasks('grunt-phpcs');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  //grunt.registerTask('default', ['phpunit', 'phpcs']);
  grunt.registerTask('default', ['watch']);
};
