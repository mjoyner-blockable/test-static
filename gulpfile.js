/*
 * include gulp
 */
var gulp    = require('gulp');
var $       = require('gulp-load-plugins')();


/*
 * include plugins
 */
var runseq  = require('run-sequence');
var htmlmin = require('gulp-htmlmin');

gulp.task('minifyhtml', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

/*
 * [gulp dev] this is used for local environments only
 */
gulp.task('dev', function(done) {
  runseq('minifyhtml', function() {
    done();
    console.log('DEV Compilation Complete.');
  });
});


/*
 * [gulp build] use this for any environment OTHER than local, use this before committing to the code repository
 */
gulp.task('build', function(done) {
  runseq('minifyhtml', function() {
    done();
    console.log('BUILD Compilation Complete.');
  });
});

