const gulp = require('gulp');
const scss = require('postcss-scss');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();
const plugins = [
  require('autoprefixer'),
  require('cssnano')({
    autoprefixer: false,
    discardComment: {removeAll: true},
    safe: true,
  }),
];
const BS = require('browser-sync');

gulp.task('BS', () => {
  BS({
    proxy: 'localhost:4000',
    files: ['static/**/*'],
    open: false,
    ghostMode: {
      clicks: false,
      forms: false,
      scroll: false,
    }
  })
})

gulp.task('styles', (done) => {
  gulp.src('components/**/*.scss')
  .pipe($.postcss(plugins, { parser: scss }))
  .pipe($.concat('app.css'))
  .pipe(gulp.dest('./static/'));
  done();
});

gulp.task('watch', () => {
  gulp.watch('components/**/*.scss', gulp.series('styles'));
});

gulp.task('default', gulp.parallel('styles'));
// gulp.task('default', 'styles');

gulp.task('dev', gulp.series('default', gulp.parallel( 'BS', 'watch')));

// gulp.task('default', gulp.series(gulp.parallel( 'styles', 'js'), 'BS', 'watch'));
