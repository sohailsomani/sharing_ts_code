var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('gulp-merge');
var tsProject = ts.createProject('tsconfig.json',{
    declaration: true
});

gulp.task('default',function() {
    var compiled = tsProject.src()
        .pipe(tsProject());

    return merge(
        compiled.js.pipe(gulp.dest('../dist/js')),
        compiled.dts.pipe(gulp.dest('../dist/tsd'))
    );
});
