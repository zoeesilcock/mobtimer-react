var babelify = require('babelify');

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      my_target: {
        files: {
          'public/app.min.js': ['public/app.js']
        }
      }
    },
    // Sass
    sass: {
      dev: {
        files: {
          'tmp/main.css': 'src/styles/main.scss'
        }
      },
      dist: {
        files: {
          'public/main.css': 'src/styles/main.scss'
        }
      }
    },
    // Browserify
    browserify: {
      options: {
        transform: [babelify],
        debug: true
      },
      dev: {
        src: './src/app.js',
        dest: './tmp/app.js',
      },
      dist: {
        src: './src/app.js',
        dest: './public/app.js',
      }
    },
    // Watch
    watch: {
      app: {
        files: ['src/**/*.js', 'src/**/*.scss'],
        tasks: ['browserify:dev', 'sass:dev']
      },
      options: {
        livereload: true,
        files: [
          './src/app.js'
        ]
      }
    },
    // Connect
    connect: {
      options: {
        port: 8000,
        hostname: 'localhost',
        livereload: true
      },
      livereload: {
        options: {
          livereload: true,
          base: {
            path: 'tmp'
          }
        }
      }
    },
    // Open
    open: {
      server: {
        url: 'http://<%= connect.options.hostname %>:<%= connect.options.port %>'
      }
    }
  });

  grunt.registerTask('serve', function(target) {
    grunt.task.run([
      'connect:livereload',
      'sass:dev',
      'browserify:dev',
      'open',
      'watch:app'
    ]);
  });

  grunt.registerTask('dist', function(target) {
    grunt.task.run([
      'sass:dist',
      'browserify:dist',
      'uglify'
    ]);
  });

  grunt.registerTask('default', ['serve']);
  grunt.registerTask('build', ['dist']);

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
};
