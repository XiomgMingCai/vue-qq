

var gulp = require('gulp');
var gutil = require('gulp-util');
var ftp = require('gulp-ftp');



gulp.task('default', function () {
    return gulp.src('server/test/**')
        .pipe(ftp(require('/Users/xiongMingCai/.password').ftp))
        .pipe(gutil.noop());
});
