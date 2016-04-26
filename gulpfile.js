// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');

gulp.task('sass', function() {
    gulp.src(['./src/*.scss','!./src/sass-variables.scss'])
        .pipe(sass())
        .pipe(gulp.dest('dist'))
        .pipe(cssnano())
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['sass'], function() {
    gulp.watch('./src/*.scss', ['sass']);
})