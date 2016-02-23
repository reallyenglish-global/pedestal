var $        = require('gulp-load-plugins')();
var argv     = require('yargs').argv;
var browser  = require('browser-sync');
var gulp     = require('gulp');
var panini   = require('panini');
var rimraf   = require('rimraf');
var sequence = require('run-sequence');
var sherpa   = require('style-sherpa');
var compass  = require('gulp-compass');

// Port to use for the development server.
var PORT = 8000;

// Browsers to target when prefixing CSS.
var COMPATIBILITY = ['last 2 versions', 'ie >= 9'];

var PATHS = {
	assets: [
	'src/assets/**/*',
	'!src/assets/{img,js,scss}/**/*'
	],
	sass: [
	'bower_components/foundation-sites/scss',
	'bower_components/motion-ui/src/'
	],
	javascript: [
	'bower_components/jquery/dist/jquery.js',
	'bower_components/what-input/what-input.js',
	'bower_components/foundation-sites/js/foundation.core.js',
	'bower_components/foundation-sites/js/foundation.util.*.js',
	'bower_components/foundation-sites/js/foundation.abide.js',
    'bower_components/foundation-sites/js/foundation.accordion.js',
    'bower_components/foundation-sites/js/foundation.accordionMenu.js',
    'bower_components/foundation-sites/js/foundation.drilldown.js',
    'bower_components/foundation-sites/js/foundation.dropdown.js',
    'bower_components/foundation-sites/js/foundation.dropdownMenu.js',
    'bower_components/foundation-sites/js/foundation.equalizer.js',
    'bower_components/foundation-sites/js/foundation.interchange.js',
    'bower_components/foundation-sites/js/foundation.magellan.js',
    'bower_components/foundation-sites/js/foundation.offcanvas.js',
    'bower_components/foundation-sites/js/foundation.orbit.js',
    'bower_components/foundation-sites/js/foundation.responsiveMenu.js',
    'bower_components/foundation-sites/js/foundation.responsiveToggle.js',
    'bower_components/foundation-sites/js/foundation.reveal.js',
    'bower_components/foundation-sites/js/foundation.slider.js',
    'bower_components/foundation-sites/js/foundation.sticky.js',
    'bower_components/foundation-sites/js/foundation.tabs.js',
    'bower_components/foundation-sites/js/foundation.toggler.js',
    'bower_components/foundation-sites/js/foundation.tooltip.js',
    'src/assets/js/**/!(app).js',
	'src/assets/js/app.js',
	'src/assets/js/demo.js'
	]
};

gulp.task('clean', function(done) {
	rimraf('dist', done);
	});

gulp.task('copy', function() {
	return gulp.src(PATHS.assets)
	.pipe(gulp.dest('dist/assets'));
	});

gulp.task('pages', function() {
	return gulp.src('src/pages/**/*.{html,hbs,handlebars}')
	.pipe(panini({
		root: 'src/pages/',
		layouts: 'src/layouts/',
		partials: 'src/partials/',
		helpers: 'src/helpers/',
		data: 'src/data/'
		}))
	.pipe(gulp.dest('dist'));
	});

gulp.task('pages:reset', function(done) {
  panini.refresh();
  gulp.run('pages');
  done();
});

gulp.task('compass', function() {
  gulp.src('./src/assets/sccs/**/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: 'src/assets/css',
      sass: 'src/assets/scss'
    }))
    .pipe(gulp.dest('dist/assets/scss'));
});

// Combine JavaScript into one file
// In production, the file is minified
gulp.task('javascript', function() {

	return gulp.src(PATHS.javascript)
	.pipe($.concat('app.js'))
	.pipe(gulp.dest('dist/assets/js'))
	.on('finish', browser.reload);
	});

// Copy images to the "dist" folder
// In production, the images are compressed
gulp.task('images', function() {

	return gulp.src('src/assets/img/**/*')
	.pipe(gulp.dest('dist/assets/img'))
	.on('finish', browser.reload);
	});

// Build the "dist" folder by running all of the above tasks
gulp.task('build', function(done) {
	sequence('clean', ['pages', 'compass', 'javascript', 'images', 'copy'], done);
	});

// Start a server with LiveReload to preview the site in
gulp.task('server', ['build'], function() {
	browser.init({
		server: 'dist', port: PORT
		});
	});

// Build the site, run the server, and watch for file changes
gulp.task('default', ['build', 'server'], function() {
	gulp.watch(PATHS.assets, ['copy']);
	gulp.watch(['src/pages/**/*'], ['pages']);
	gulp.watch(['src/{layouts,partials,helpers,data}/**/*'], ['pages:reset']);
	gulp.watch(['src/assets/scss/**/{*.scss, *.sass}'], ['compass']);
	gulp.watch(['src/assets/js/**/*.js'], ['javascript']);
	gulp.watch(['src/assets/img/**/*'], ['images']);
	});