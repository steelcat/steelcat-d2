var gulp = require('gulp'),
	$ = require('gulp-load-plugins')();

gulp.task('server', ['watch'], function() {
	$.connect.server({
		root: 'public', // корневая папка для сервера
		port: 8000, // порт сервера
		livereload: true // автоматический перезапуск
	})
});