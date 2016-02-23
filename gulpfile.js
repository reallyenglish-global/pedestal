var gulp = require('gulp');
var panini = require('panini');

gulp.task('clean', function(done) {
  rimraf('dist', done);
});

gulp.task('default', function() {
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