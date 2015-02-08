var gulp = require('gulp'),
	$ = require('gulp-load-plugins')(); // автоматическая загрузка плагинов gulp
gulp.task('watch', ['templates', 'styles', 'scripts'], function() {
	// при изменении любых файлов с расширением jade в папке app запускается задача templates, аналогично для js и scss файлов в соответствующих папках
	gulp.watch('app/**/**/**/*.jade', ['templates']);
	gulp.watch('app/**/**/**/*.scss', ['styles']);
	gulp.watch('app/**/*.js', ['scripts']);
});