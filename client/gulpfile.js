var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('default',['copy-html','compile-ts','copy-dependencies'], function() {
});

gulp.task('copy-html',function() {
    return gulp.src('src/**.html')
        .pipe(gulp.dest('../dist'));
});

gulp.task('compile-ts',function() {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("../dist/js"));
});

gulp.task('copy-dependencies',function() {
    return gulp.src('bower_components/**')
        .pipe(gulp.dest('../dist/js/bower_components'))
    ;
});
