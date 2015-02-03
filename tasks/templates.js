var gulp = require('gulp'),
	$ = require('gulp-load-plugins')(); // автоматическая загрузка плагинов gulp
gulp.task('templates', function(){
	return gulp.src('app/*.jade')
		.pipe($.jade({
			pretty: true
		})) // компилируем jade в html
		.pipe(gulp.dest('public')) // путь где будут лежать html файлы
		.pipe($.connect.reload()); // перезагрузка сервера
});