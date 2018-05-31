const gulp = require('gulp');
const del = require('del');
const exec = require('child_process').exec;
var runSequence = require('run-sequence');
const gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();

gulp.task('clean', function () {
  return del(['docs/**', 'docs/.*', '!docs'], {
    force: true
  });
});
gulp.task('copy', function () {
  gulp.src([
      '_book/**/*'
    ])
    .pipe(gulp.dest('docs'));
});

gulp.task('build', function(){
  exec('gitbook build', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  });
});


gulp.task('default', function(callback) {
  runSequence('clean',
              'build',
              'copy',
              callback);
});