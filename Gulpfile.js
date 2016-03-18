var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

/*gulp.task('express', function() {
	var express = require('express');
	var app = express();
	app.use(express.static(__dirname));
	app.listen(4000, '0.0.0.0');
});*/

var sass_base = "./Styles/include.scss";
var sass_dir = "./Styles/global/**/*.scss";
var css_dist = "./Styles/dist";

gulp.task('browser-sync', ['sass'], function() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	gulp.watch(sass_dir, ['sass']);
	gulp.watch("./*.html").on('change', browserSync.reload);
});



gulp.task('sass', function() {
	return gulp.src(sass_base)
		.pipe(sass())
		.pipe(gulp.dest(css_dist))
		.pipe(browserSync.stream());	
});

gulp.task('default',['browser-sync'], function() {

});