const gulp = require('gulp'),
  eslint = require('gulp-eslint'),
  mocha = require('gulp-mocha'),
  exit = require('gulp-exit'),
  watchFiles = ['./server/**/*.js', './test/**/*.js'],
  handleMochaError = err => {
    console.log(err.toString());
    process.exit(1);
  };

gulp.task('lint', () => {
  return gulp
    .src(watchFiles)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('lint:tdd', () => {
  return gulp
    .src(watchFiles)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('test:unit', ['lint:tdd'], () => {
  gulp
  .src(['./test/**/*.unit.js', '!**/gulpfile.js'], {read: false})
  .pipe(mocha())
  .on('error', handleMochaError)
  .pipe(exit());
});

gulp.task('test:integration', ['lint:tdd'], () => {
  gulp
  .src('./test/**/*.integration.js', {read: false})
  .pipe(mocha())
  .on('error', handleMochaError)
  .pipe(exit());
});

gulp.task('default', ['test:unit']);
