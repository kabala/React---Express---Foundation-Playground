var gulp = require('gulp');

var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var $ = require('gulp-load-plugins')();


// paths
var src = './src/';
var build = './build/';
var path = {
	index: src + 'views/layout.jade',
	img: src + 'public/images/**/*',
	js: src + 'public/javascripts/**',
	react: src + 'public/javascripts/build/**',
	vendor_scss: src + 'public/sass/vendor.scss',
	custom_scss: src + 'public/sass/custom.scss',
	stylesheets: src + 'public/stylesheets/'
};


// compile jsx into js
gulp.task('js', function(){
    browserify('./src/public/javascripts/app.jsx')
        .transform(reactify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest(path.react));
});

// compile vendor sass
gulp.task('sass-vendor', function() {
    gulp.src(path.vendor_scss)
    .pipe($.sourcemaps.init())
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(path.stylesheets));
});

// compile custom sass
gulp.task('sass-custom', function() {
    gulp.src(path.custom_scss)
    .pipe($.sourcemaps.init())
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(path.stylesheets));
});

// watch
gulp.task('watch', function() {
	gulp.watch(path.js, ['js']);
	gulp.watch(path.vendor_scss, ['sass-vendor']);
	gulp.watch(path.custom_scss, ['sass-custom']);
});


gulp.task('default', ['js', 'sass-vendor', 'sass-custom', 'watch']);