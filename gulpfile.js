var $            = require('gulp-load-plugins')();
var argv         = require('yargs').argv;
var browser      = require('browser-sync');
var gulp         = require('gulp');
var panini       = require('panini');
var rimraf       = require('rimraf');
var sequence     = require('run-sequence');
var sherpa       = require('style-sherpa');
var scsslint     = require('gulp-scss-lint');
var gutil        = require('gulp-util');
var autoprefixer = require('gulp-autoprefixer');
var base64       = require('gulp-css-base64');
var sherpa       = require('style-sherpa');

// Port to use for the development server.
var PORT = 8000;

// Browsers to target when prefixing CSS.
var COMPATIBILITY = ['last 2 versions', 'ie >= 9'];

var PATHS = {
	assets: [
	'src/assets/**/*',
	'!src/assets/{images,fonts,scss,js}/**/*',
	'!src/assets/{images,fonts,scss,js}/'
	],
	sass: [
	'bower_components/foundation-sites/scss',
	'bower_components/motion-ui/src/'
	],
  jquery: [
  'bower_components/jquery/dist/jquery.js'
  ],
  foundation: [
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
	],
	eztt: [
	'bower_components/what-input/what-input.js',
	'bower_components/sly/index.js',
	'src/assets/js/eztt.js'
	]
};

var colors = gutil.colors;
var customReporter = function(file, stream) {
	if (!file.scsslint.success) {
		file.scsslint.issues.forEach(function (issue) {
			var severity = issue.severity === 'warning' ? colors.yellow(' [W] ') : colors.red(' [E] ');
      var linter = issue.linter ? (issue.linter + ': ') : '';
      var logMsg =
        colors.cyan(file.relative) + ':' + colors.magenta(issue.line) + severity + colors.green(linter) + issue.reason;

			stream.emit('error', new gutil.PluginError("scss-lint", logMsg));
		})
	}
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

// Generate a style guide from the Markdown content and HTML template in styleguide/
gulp.task('styleguide', function(done) {
  sherpa('src/styleguide/index.md', {
    output: 'dist/styleguide.html',
    template: 'src/styleguide/template.html'
  }, done);
});

gulp.task('sass', function() {
  return gulp.src('src/assets/scss/app.scss')
    .pipe($.sass({
      includePaths: PATHS.sass
    })
    .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: COMPATIBILITY
    }))
    .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('base64', ['sass'], function () {
  return gulp.src('dist/assets/css/app.css')
    .pipe(base64({
      baseDir: "src",
      maxWeightResource: 100000
    }))
    .pipe(gulp.dest('dist/assets/css'))
    .on('finish', browser.reload);
});

gulp.task('jquery', function() {
  return gulp.src(PATHS.jquery)
    .pipe(gulp.dest('dist/assets/js'));
});
gulp.task('foundation', function() {
  return gulp.src(PATHS.foundation)
	  .pipe($.babel())
	  .pipe($.concat('foundation.js'))
	  .pipe(gulp.dest('dist/assets/js'));
});
gulp.task('eztt', function() {
  return gulp.src(PATHS.eztt)
	  .pipe($.babel())
	  .pipe($.concat('eztt.js'))
	  .pipe(gulp.dest('dist/assets/js'));
});
// Combine JavaScript into one file
// In production, the file is minified
gulp.task('javascript', ['jquery', 'foundation', 'eztt'], function() {

	gulp.src('src/assets/js/demo.js')
	.pipe(gulp.dest('dist/assets/js'));

	return gulp.src(['dist/assets/js/jquery.js',
                   'dist/assets/js/foundation.js',
                   'dist/assets/js/eztt.js'])
	.pipe($.babel())
	.pipe($.concat('app.js'))
	.pipe(gulp.dest('dist/assets/js'))
	.on('finish', browser.reload);
});

// Copy images to the "dist" folder
// In production, the images are compressed
gulp.task('images', function() {
	return gulp.src('src/assets/images/**/*')
	.pipe(gulp.dest('dist/assets/images'))
	.on('finish', browser.reload);
});

// Build the "dist" folder by running all of the above tasks
gulp.task('build', function(done) {
	sequence('clean', ['pages', 'javascript', 'images', 'copy'], 'base64', 'styleguide', done);
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
	gulp.watch(['src/assets/scss/**/{*.scss, *.sass}'], ['base64']);
	gulp.watch(['src/assets/js/**/*.js'], ['javascript']);
	gulp.watch(['src/assets/images/**/*'], ['images']);
	gulp.watch(['src/styleguide/**/*'], ['styleguide']);
});
