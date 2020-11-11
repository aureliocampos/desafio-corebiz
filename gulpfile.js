const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

const style = {
  src: 'src/scss/**/*.scss',
  dest: 'public/css'
}
const scripts = {
  src: 'src/js/**/*.js',
  dest: 'public/js'
}
const build = gulp.parallel(scss, javascript, watching)

function server() {
  browserSync.init({
    server: {
      baseDir: './public/'
    }
  })
}
function scss() {
  return gulp
    .src(style.src, { sourcemaps: true })
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(style.dest, { sourcemaps: '.' }))
    .pipe(browserSync.reload({
      stream: true
    }))
}
function javascript() {
  return gulp
    .src(scripts.src, { sourcemaps: true })
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(scripts.dest, { sourcemaps: '.' }))
    .pipe(browserSync.reload({
      stream: true
    }))
}
function watching() {
  gulp.watch(style.src, scss);
  gulp.watch(scripts.src, javascript); 
  gulp.watch("public/*.html").on('change', browserSync.reload);
}

exports.watching = watching;
exports.javascript = javascript;
exports.scss = scss;

gulp.task('default', build, server())