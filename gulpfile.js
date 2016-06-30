var gulp = require('gulp');
var webpack = require('webpack-stream');
var gulpLivereload = require('gulp-livereload');
var gulpUglify = require('gulp-uglify');
var flatten = require('gulp-flatten');
var concat = require('gulp-concat');
var nodemon = require('gulp-nodemon');
var cleanCSS = require('gulp-clean-css');
var del = require('del');
var ejs = require("gulp-ejs");
var less = require('gulp-less');
var path = require('path');
var gutil = require('gulp-util');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');


gulp.task('vendors', ['normalize_css'], function() {
    return gulp.src([
            'bower_components/js-cookie/src/js.cookie.js',
            //'bower_components/js-md5/js/md5.min.js',
        ])
        .pipe(gulpUglify())
        .pipe(flatten())
        .pipe(concat('vendor_tools.js'))
        .pipe(gulp.dest('www/js'));
});

gulp.task('normalize_css', function() {
    return gulp.src([
            // "bower_components/normalize-css/normalize.css"
            'bower_components/bootstrap/dist/css/bootstrap.min.css',
            // 'bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
        ])
        .pipe(flatten())
        .pipe(concat('base.css'))
        .pipe(gulp.dest('www/css'));
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
            './less/fix.less',
            './less/index.less'
        ])
        .pipe(less())
        .pipe(gulp.dest('./www/css'))
        .pipe(gulpLivereload());
});

gulp.task('del', function() {
    return del([
        'www/css/*',
        'www/js/*',
        'view/*',
        'rev/*'
    ]);
});

gulp.task('mini_css', function() {
    return gulp.src([
            './www/css/*.css'
        ])
        .pipe(cleanCSS({s0:true}))
        .pipe(gulp.dest('./www/css'))
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
        "rev/**"
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

gulp.task('rev_view', ['rev_build'], function() {
    return gulp.src(['./rev/*.json', './view/*.html']) //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件
        .pipe(revCollector()) //- 执行文件内css名的替换
        .pipe(gulp.dest('./view')); //- 替换后的文件输出的目录
});

gulp.task('rev_build', ['clear', 'build'], function() {
    return gulp.src(['./www/css/*.css', './www/js/*.js'], { base: 'www' })
        .pipe(rev())
        .pipe(gulp.dest('www'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('rev'));
});

gulp.task('init', ['vendors']);
gulp.task('default', ['app_dev', 'scripts', 'ejs', 'less', 'watch']);
gulp.task('clear', ['del']);
gulp.task('build', ['vendors', 'normalize_css', 'scripts', 'ejs', 'less']);
gulp.task('mimi', ['mini_css']);
gulp.task('rev', ['rev_build', 'rev_view']);
