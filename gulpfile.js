'use strict';

// what does the require function do exactly
const gulp = require('gulp')
const sass = require('gulp-sass')

// what is this setting doing?
// difference between node-sass and gulp-sass?
sass.compiler = require('node-sass')

// be able to explain what this gulp task does
gulp.task('sass', () => {
    return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
})

// be able to explain what this gulp task does
gulp.task('sass:watch', () => {
    gulp.watch('./sass/**/*.scss', ['sass'])
})