const gulp = require('gulp');
const connect = require('gulp-connect');
const livereload = require('gulp-livereload');


gulp.task('image', function() {
        return gulp.src('img/*.*')
        .pipe(gulp.dest('public/img'));
});

gulp.task('css', function () {
    return gulp.src('css/*.css')
    .pipe(gulp.dest('public/css'));
});


gulp.task('connect', function() {
  connect.server({
    root: 'public',
    livereload: true
  });
});

gulp.task('html', function() {
  return gulp.src('index.html')
  .pipe(gulp.dest('public'));
})

gulp.task('js', function() {
  return gulp.src('js/*.js')
  .pipe(gulp.dest('public/js'));
})

gulp.task('htmlreload', function() {
  return gulp.src('public/index.html')
  .pipe(livereload());
})

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('images/*.*', gulp.series('image'));
  gulp.watch('css/*.css', gulp.series('css', 'htmlreload'));
  gulp.watch('js/*.js', gulp.series('js', 'htmlreload'));
  gulp.watch('index.html', gulp.series('html', 'htmlreload'));
});

gulp.task('dev', gulp.series(gulp.parallel('connect', 'watch')));
