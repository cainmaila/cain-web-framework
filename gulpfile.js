var gulp = require('gulp');
var webpack = require('webpack-stream');
var gulpLivereload = require('gulp-livereload');
var gulpUglify = require('gulp-uglify');
var flatten = require('gulp-flatten');
var concat = require('gulp-concat');
var nodemon = require('gulp-nodemon');
var del = require('del');
var ejs = require("gulp-ejs");
var less = require('gulp-less');
var path = require('path');
var gutil = require('gulp-util');


gulp.task('vendors', function() {
    gulp.src([
            'bower_components/js-cookie/src/js.cookie.js',
            //'bower_components/js-md5/js/md5.min.js',
        ])
        .pipe(gulpUglify())
        .pipe(flatten())
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest('www/vendors'));
});

gulp.task('scripts', function() {
    return gulp.src('./xxx.js') //隨便打
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('www/js'))
        .pipe(gulpLivereload());
});

gulp.task('ejs', function() {
    return gulp.src([
            "./ejs/index.html",
        ])
        .pipe(gulp.dest("./view"))
        .pipe(gulpLivereload());
});

gulp.task('less', function() {
    return gulp.src([
            './less/index.less'
        ])
        .pipe(less())
        .pipe(gulp.dest('./www/css'))
        .pipe(gulpLivereload());
});

gulp.task('clear_vendors', function() {
    return del([
        'www/js/vendors.*',
    ]);
});

gulp.task('clear', function() {
    return del([
        'www/css/*.css',
        'www/js/*.js',
        'www/vendors/*.js',
        'view/*.html'
    ]);
});

/**
 * watch 的配置
 */
gulp.task('watch', function() {
    gulpLivereload.listen();
    gulp.watch(['ejs/*.html'], ['ejs']);
    gulp.watch(['less/*.less'], ['less']);
    gulp.watch(['src/**'], ['scripts']);
});

/**
 * nodemon 的配置
 */
var nodemonConfig = {
    script: 'app/app.js',
    ignore: [
        "bower_components/**",
        "less/**",
        "www/**",
        "ejs/**",
        "src/**",
        "view/**",
    ],
    env: {
        "NODE_ENV": "development",
        "PORT": 80
    }
};

/**
 *  nodemon 重啟 app
 */
gulp.task('app_dev', function() {
    nodemon(nodemonConfig)
        .on('restart', function() {
            console.log('web server restarted!');
        })
})

//gulp.task('default', ['app_dev', 'scripts', 'vendors', 'ejs', 'less', 'watch']);
gulp.task('default', ['app_dev', 'scripts', 'ejs', 'less', 'watch']);
//gulp.task('build', ['clear', 'scripts', 'vendors', 'ejs', 'less']);
