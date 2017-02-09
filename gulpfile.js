var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');

// var postcss = require('gulp-postcss');
// var autoprefixer = require('autoprefixer');
// var nested = require('postcss-nested');


// var processors = [
// 	autoprefixer({
// 		browsers: ['last 4 versions']
// 	})
// 	nested
// ];

// gulp.task('copy', function(){
// 	return gulp
// 	.src('src/*.css')
// 	.pipe(postcss(processors))
// 	.pipe(gulp.dest('build/'))
// })


gulp.task('jade', function () {
	gulp.src('./src/*.jade')
	.pipe(jade({
		pretty: true
	}))
	.pipe(gulp.dest('./dist'))
})


gulp.task('watch', function() {
	gulp.watch('./src/*.jade', ['jade'])
});


gulp.task('sass', function() {
	return gulp.src('./sass/**/*.scss')
	.pipe(sass() .on('error', sass.logError))
	.pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});


gulp.task('default', ['jade', 'watch', 'sass', 'sass:watch']);
