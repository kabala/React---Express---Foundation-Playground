var gulp = require('gulp');
var $ = require('gulp-load-plugins')();


var paths = {
  src: 'src',
  tmp: '.tmp',
  dist: 'build',
  stylesheets: 'src/stylesheets/vendor/*.{sass,scss,css}',
  overrides: 'src/stylesheets/custom/*.scss',
  pages: 'src/templates/pages/*.haml',
  partials: 'src/templates/partials/**/*.haml',
  layouts: 'src/templates/layouts/*.haml',
  images: 'src/images/**.*',
  fonts: 'src/fonts/**/*.{eot,svg,ttf,woff}',
  scripts: 'src/javascripts/*.js'
};