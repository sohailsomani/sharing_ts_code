var gulp = require('gulp');
var flatten = require('gulp-flatten');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var merge = require('merge-stream');

gulp.task('default',['copy-html','compile-ts','copy-dependencies'], function() {
});

gulp.task('copy-html',function() {
    var app = gulp.src('src/**.html')
        .pipe(gulp.dest('../dist'));

    var components = gulp.src('components/**')
        .pipe(gulp.dest('../dist/js'));

    return merge(app,components);
});

gulp.task('compile-ts',function() {
    return tsProject.src()
        .pipe(tsProject())
        .js
        .pipe(flatten())
        .pipe(gulp.dest("../dist/js"));
});

gulp.task('copy-dependencies',function() {
    return gulp.src('bower_components/**')
        .pipe(gulp.dest('../dist/js/bower_components'))
    ;
});
