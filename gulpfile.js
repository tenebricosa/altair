// Gulp and plugins
var gulp = require('gulp'), stylus = require('gulp-stylus'), concat = require('gulp-concat'), watch = require('gulp-watch'), batch = require('gulp-batch'), autoprefixer = require('gulp-autoprefixer');

//Compile all stylus files to css
gulp.task('compile', function () {
    return gulp.src([
            'styles/require.styl'
        ])
        .pipe(stylus())
        .pipe(concat('main.css'))
        .pipe(autoprefixer({
			browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie 8', 'ie 9']
		}))
        .pipe(gulp.dest('css'));
});

//Styles watcher
gulp.task('watch', function () {
    watch('Styles/**/*.styl', batch(function (events, done) {
        gulp.start('compile', done);
    }));
});

//Prefix CSS with Autoprefixer
