"use strict";
const gulp = require('gulp'),
      eslint = require('gulp-eslint');

gulp.task('eslint', () => {
    return gulp.src(['lib/*.js'])
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});


gulp.task('default', ['eslint']);
