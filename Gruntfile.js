var TerserPlugin = require('terser-webpack-plugin');
var webpackConfig = require('./webpack.config.js');

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-sftp-deploy');

  grunt.initConfig({
    'pkg': grunt.file.readJSON('package.json'),
    'webpack': {
      options: webpackConfig,
      build: {
        mode: 'production',
        optimization: {
          minimize: true,
          minimizer: [new TerserPlugin()],
        },
      }
    },
    'webpack-dev-server': {
      options: webpackConfig,
      start: {
        mode: 'development',
        devtool: 'eval',
        devServer: {
          static: 'public',
        },
      }
    },
    'open': {
      default: {
        path: 'http://localhost:8080/',
        app: 'Google Chrome'
      }
    },
    'sftp-deploy': {
      build: {
        auth: {
          host: 'zoeetrope.com',
          authKey: 'privateKey',
          port: 22
        },
        src: 'public',
        dest: '/home/deployer/mob-timer',
        serverSep: '/',
        progress: true
      }
    }
  });

  grunt.registerTask('default', ['webpack-dev-server:start', 'open:dev']);
  grunt.registerTask('build', ['webpack:build']);
  grunt.registerTask('deploy', ['webpack:build', 'sftp-deploy']);
};
