const gulp = require('gulp');
const concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');
const plumber = require('gulp-plumber');
const remember = require('gulp-remember');
const browserSync = require('browser-sync').create();
const htmlmin = require('gulp-htmlmin');
const del = require('del');
const notify = require('gulp-notify');
const rename = require('gulp-rename');
const minify = require('gulp-minify');
const autoprefixer = require('gulp-autoprefixer');
const rollup = require('gulp-rollup');
const less = require('gulp-less');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

let isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

gulp.task('getHTML', () => {
  return gulp
    .src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('public'));
});

gulp.task('getAllCSS', () => {
  return (
    gulp
      .src('src/styles/*.less', { since: gulp.lastRun('getAllCSS') })
      .pipe(
        plumber({
          errorHandler: notify.onError(function (err) {
            return {
              title: 'less',
              message: err.message,
            };
          }),
        })
      )
      .pipe(gulpIf(isDevelopment, sourcemaps.init()))
      .pipe(remember())
      .pipe(less())
      .pipe(concat('styles.css'))
      .pipe(gulpIf(isDevelopment, sourcemaps.write()))
      .pipe(
        autoprefixer({
          cascade: false,
        })
      )
      .pipe(cssmin())
      .pipe(rename('styles.min.css'))
      .pipe(gulp.dest('public/styles'))
  );
});

gulp.task('clean', (done) => {
  del(['public/styles/styles.css']);
  del(['public/*.html']);
  del(['public/scripts/script-min.js']);
  del(['public/img/*.{jpg, png, webp}']);
  done();
});

gulp.task('getAllJS', () => {
  return gulp
    .src(['./src/scripts/*.js'])
    .pipe(
      plumber({
        errorHandler: notify.onError((err) => {
          return {
            title: 'js',
            message: err.message,
            err: err,
          };
        }),
      })
    )
    .pipe(gulpIf(isDevelopment, sourcemaps.init()))
    .pipe(
      rollup({
        input: './src/scripts/main.js',
        output: {
          format: 'iife',
        },
      })
    )
    .pipe(gulpIf(isDevelopment, sourcemaps.write()))
    .pipe(minify())
    .pipe(gulp.dest('./public/scripts'));
});

gulp.task('getImg', () => {
  return gulp
    .src('src/img/*', { since: gulp.lastRun('getImg') })
    .pipe(imagemin([
      imagemin.mozjpeg({ quality: 75, progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo({
        plugins: [
          {
            removeViewBox: true
          }
        ]
      })
    ], {
      verbose: true
    }))
    .pipe(gulp.dest('public/img/'))
});

gulp.task('transformImgToWebp', () =>
  gulp.src('src/img/*.{jpg,png}')
    .pipe(webp())
    .pipe(gulp.dest('public/img/'))
);

gulp.task('watch', () => {
  gulp.watch('src/styles/*.less', gulp.series('getAllCSS'));
  gulp.watch('src/*.html', gulp.series('getHTML'));
  gulp.watch('src/scripts/*.js', gulp.series('getAllJS'));
  gulp.watch('src/img/*.{png, jpg}', gulp.series('getImg', 'transformImgToWebp'));
});

gulp.task('build', gulp.series('clean', 'getImg', 'transformImgToWebp', gulp.parallel('getAllCSS', 'getHTML', 'getAllJS')));

gulp.task('serve', () => {
  browserSync.init({
    server: 'public',
    tunnel: true,
  });

  gulp.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('dev', gulp.series('build', gulp.parallel('watch', 'serve')));
