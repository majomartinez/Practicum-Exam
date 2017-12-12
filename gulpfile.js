var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();


gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass()).on('error', sass.logError) // Using gulp-sass
    .pipe(gulp.dest('app/css'))
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('sass/**/*.scss',['sass']);
});

