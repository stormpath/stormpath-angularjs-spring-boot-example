var gulp = require('gulp');
var browserSync = require('browser-sync').create();
$ = require('gulp-load-plugins')();

gulp.task('clean', function () {
    return gulp.src('dist/')
        .pipe($.clean());
});

gulp.task('copy', ['clean'], function () {
    gulp.src(['**', '!index*.html*', '!js/**', '!lib/**', '!**/*.css'], {cwd: 'app/'})
        .pipe(gulp.dest('dist/.'));
});

gulp.task('dist', ['copy'], function () {
    return gulp.src('app/index.html')
        .pipe($.usemin({
            css: [$.cleanCss(), $.rev()],
            js: [$.uglify(), $.rev()]
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('serve', function() {

    browserSync.init({
        server: './app'
    });

    gulp.watch(['app/**/*.js', 'app/**/*.css', 'app/**/*.html'])
        .on('change', browserSync.reload);
});

// Tell Gulp what to do when we type "gulp" into the terminal
gulp.task('default', ['serve']);
