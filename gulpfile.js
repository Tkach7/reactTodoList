const gulp = require('gulp');
const path = require('path');
const plumber = require('gulp-plumber');
const stylus = require('gulp-stylus');
const autoprefixer = require('gulp-autoprefixer');
const webpackStream = require('webpack-stream');
const image = require('gulp-image');

const dev = process.env.NODE_ENV !== 'production';
const webpackOptions = require('./webpack.config.js');

/** @gulp: default task */
gulp.task('default', ['dist', 'watch'], function() {
    require('gulp-develop-server').listen({
        path: './index.js',
        execArgv: [ '--harmony' ]
    })
});

/** @gulp: make dist */
gulp.task('dist', ['js', 'stylus', 'assets'], function() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
});

/** @gulp: make javascript */
gulp.task('js', function(done) {
    gulp.src('src/js/index.jsx')
        .pipe(plumber())
        .pipe(webpackStream(webpackOptions))
        .pipe(gulp.dest('dist/js'))
        .on('data', function() {
            if (!done.called) {
                done.called = true;
                done();
            }
        })
});

/** @gulp: make styles */
gulp.task('stylus', function() {
    return gulp.src('src/stylus/style.styl')
        .pipe(plumber())
        .pipe(stylus())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'))
});

/** @gulp: copy assets */
gulp.task('assets', function() {
    return gulp.src('src/assets/**/*')
        .pipe(gulp.dest('dist'));
});

/** @gulp: make image */
gulp.task('image', function() {
    return gulp.src('src/assets/img/**/*.png')
        .pipe(image())
        .pipe(gulp.dest('dist/assets/'));
});

/** @gulp: watch task */
gulp.task('watch', function() {
    gulp.watch('src/**/*.styl', ['stylus']);
    gulp.watch('src/index.html', ['dist']);
});
