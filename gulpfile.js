var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var templateCache = require('gulp-angular-templatecache');

gulp.task('js', function () {
	return gulp.src(['./js/app.js', 'views/*.js'])
				.pipe(uglify())
				.pipe(concat('all.js'))
				.pipe(gulp.dest('./dist'));
});

gulp.task('cache', function () {

	var options = {
		root: 'views/',
		module: 'app'
	}

	return gulp.src('views/*.html')
			.pipe(templateCache(options))
			.pipe(gulp.dest('public'));
});

gulp.task('server', function () {
	connect.server({
		port: 4000
	});
});

gulp.task('default', ['cache', 'server']);

gulp.watch('views/*.html', ['cache']);
