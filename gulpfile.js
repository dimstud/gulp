// Последовательный и параллельный запуск task

// const gulp = require('gulp'); //Подключаем Gulp

// // gulp.task('hello', function(callback) {
// //     console.log('Hello from Gulp!');
// //     callback(); // Сигнализирует о завершении task(не для всех задач)
// // })

// gulp.task('first', function (callback) {
//     console.log('Hello FIRST task');
//     callback();
// })

// gulp.task('second', function(callback) {
//     console.log('Hello SECONS task');
//     callback();
// });

// gulp.task('thrird', function(callback) {
//     console.log('Hello THIRD task');
//     callback();
// });

// gulp.task('fourth', function(callback) {
//     console.log('Hello FOURTH task');
//     callback();
// });

// // gulp.task('default', gulp.series('first', 'second')); //Поочерёдно запускает task 

// // gulp.task('default', gulp.parallel('first', 'second', 'thrird', 'fourth')); // Паралельно запускает task

// gulp.task('default', gulp.series('first', gulp.parallel('second', 'thrird'), 'fourth'));




//Подключение BrowserSync

// const gulp = require('gulp');
// const browserSync = require('browser-sync').create(); 
// const watch = require('gulp-watch');

// gulp.task('watch', function() {
//     watch(['./app/*.html', './app/css/**/*.css'], gulp.parallel(browserSync.reload));
// });

// // Задача для старта сервера из папки app
// gulp.task('server', function() {
//     browserSync.init({
//         server: {
//             baseDir: "./app/"
//         }
//     })
// });

// gulp.task('default', gulp.parallel('server', 'watch'));




//Подключение sass
// const gulp = require('gulp');
// const browserSync = require('browser-sync').create(); 
// const watch = require('gulp-watch');
// const sass = require('gulp-sass');

// // Task для компиляции SCSS в CSS
// gulp.task('scss', function(callback) {
//     return gulp.src('./app/scss/main.scss')
//         .pipe(sass())
//         .pipe( gulp.dest('./app/css/') );
//     callback();
// });
// // Слежение за HTML и CSS и обновление браузера
// gulp.task('watch', function() {
//     watch(['./app/*.html', './app/css/**/*.css'], gulp.parallel(browserSync.reload));
// });

// // Задача для старта сервера из папки app
// gulp.task('server', function() {
//     browserSync.init({
//         server: {
//             baseDir: "./app/"
//         }
//     })
// });

// gulp.task('default', gulp.parallel('server', 'watch'));



//Подключение autoprefixer
// 




//Фикс бага scss
// const gulp = require('gulp');
// const browserSync = require('browser-sync').create(); 
// const watch = require('gulp-watch');
// const sass = require('gulp-sass');
// const autoprefixer = require('gulp-autoprefixer');
// const sourcemaps = require('gulp-sourcemaps');

// // Task для компиляции SCSS в CSS
// gulp.task('scss', function(callback) {
//     return gulp.src('./app/scss/main.scss')
//         .pipe(sourcemaps.init())
//         .pipe(sass())
//         .pipe(autoprefixer({
//             overrideBrowserslist: ['last 4 versions']
//         }))
//         .pipe(sourcemaps.write())
//         .pipe(gulp.dest('./app/css/'));
//     callback();
// });
// // Слежение за HTML и CSS и обновление браузера
// gulp.task('watch', function() {
//     watch(['./app/*.html', './app/css/**/*.css'], gulp.parallel(browserSync.reload));


//     //Слежение за SCSS и компиляция в CSS
//     // watch('./app/scss/**/*/scss', gulp.parallel('scss'));

//     watch('./app/scss/**/*.scss', function() {
//         setTimeout(gulp.parallel('scss'), 1000);
//     })
// })

// // Задача для старта сервера из папки app
// gulp.task('server', function() {
//     browserSync.init({
//         server: {
//             baseDir: "./app/"
//         }
//     })
// });

// gulp.task('default', gulp.parallel('server', 'watch', 'scss'));







//Обработка ошибок SCSS
// const gulp = require('gulp');
// const browserSync = require('browser-sync').create(); 
// const watch = require('gulp-watch');
// const sass = require('gulp-sass');
// const autoprefixer = require('gulp-autoprefixer');
// const sourcemaps = require('gulp-sourcemaps');
// const notify = require('gulp-notify');
// const plumber = require('gulp-plumber');

// // Task для компиляции SCSS в CSS
// gulp.task('scss', function(callback) {
//     return gulp.src('./app/scss/main.scss')
//         .pipe(plumber({
//             errorHandler: notify.onError(function(err){
//                 return {
//                     title: 'Styles',
//                     sound: false,
//                     message: err.message
//                 }
//             })
//         }))
//         .pipe(sourcemaps.init())
//         .pipe(sass())
//         .pipe(autoprefixer({
//             overrideBrowserslist: ['last 4 versions']
//         }))
//         .pipe(sourcemaps.write())
//         .pipe(gulp.dest('./app/css/'));
//     callback();
// });
// // Слежение за HTML и CSS и обновление браузера
// gulp.task('watch', function() {
//     watch(['./app/*.html', './app/css/**/*.css'], gulp.parallel(browserSync.reload));


//     //Слежение за SCSS и компиляция в CSS
//     // watch('./app/scss/**/*/scss', gulp.parallel('scss'));

//     watch('./app/scss/**/*.scss', function() {
//         setTimeout(gulp.parallel('scss'), 1000);
//     })
// })

// // Задача для старта сервера из папки app
// gulp.task('server', function() {
//     browserSync.init({
//         server: {
//             baseDir: "./app/"
//         }
//     })
// });

// gulp.task('default', gulp.parallel('server', 'watch', 'scss'));







//Разделение HTML
const gulp = require('gulp');
const browserSync = require('browser-sync').create(); 
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const fileinclude = require('gulp-file-include');


//Task для сборки HTML из шаблонов
gulp.task('html', function(callback) {
    return gulp.src('./app/html/*.html')
    .pipe(plumber({
        errorHandler: notify.onError(function(err){
            return {
                title: 'HTML include',
                sound: false,
                message: err.message
            }
        })
    }))
    .pipe(fileinclude({prefix: '@@'}))
    .pipe(gulp.dest('./app/'))
    callback();
});

// Task для компиляции SCSS в CSS
gulp.task('scss', function(callback) {
    return gulp.src('./app/scss/main.scss')
        .pipe(plumber({
            errorHandler: notify.onError(function(err){
                return {
                    title: 'Styles',
                    sound: false,
                    message: err.message
                }
            })
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 4 versions']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./app/css/'));
    callback();
});
// Слежение за HTML и CSS и обновление браузера
gulp.task('watch', function() {
    watch(['./app/*.html', './app/css/**/*.css'], gulp.parallel(browserSync.reload));


    //Слежение за SCSS и компиляция в CSS
    // watch('./app/scss/**/*/scss', gulp.parallel('scss'));

    //Запуск слежения и компиляции SCSS с задержкой, при ошибках
    watch('./app/scss/**/*.scss', function() {
        setTimeout(gulp.parallel('scss'), 1000);
    });

    //Слежение за HTML и сборка страниц из шаблонов 
    watch('./app/html/**/*.html', gulp.parallel('html'));
});

// Задача для старта сервера из папки app
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./app/"
        }
    });
});

gulp.task('default', gulp.parallel('server', 'watch', 'scss', 'html'));