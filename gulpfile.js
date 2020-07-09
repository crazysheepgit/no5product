// 导入
let gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    htmlmin = require('gulp-htmlmin');

// 创建目录
//css
function fnCSS(){
    return gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/css'));
}

//js
function fnJS(){
    return gulp.src('./src/es6/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/js'));
}

//img
function fnImg(){
    return gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
}

//pages
function fnHTML(){
    return gulp.src('./src/pages/*.html')
    .pipe(htmlmin())
    .pipe(gulp.dest('./dist/pages'));
}

//首页转存
function fnCopy(){
    return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'));
}

//libs
function fnLibs(){
    return gulp.src('./src/libs/**/*')
    .pipe(gulp.dest('./dist/libs'));
}

//监听
function fnWatch(){
    gulp.watch('./src/sass/*.scss',fnCSS);
    gulp.watch('./src/es6/*.js',fnJS);
    gulp.watch('./src/img/*',fnImg);
    gulp.watch('./src/pages/*.html',fnHTML);
    gulp.watch('./src/index.html',fnCopy);
    gulp.watch('./src/libs/**/*',fnLibs)
}

//三、导出模块
exports.css = fnCSS;
exports.js = fnJS;
exports.img = fnImg;
exports.html = fnHTML;
exports.copyIndex = fnCopy;
exports.default = fnWatch;
exports.libs = fnLibs;