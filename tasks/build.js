var gulp = require('gulp'); // Подключаем gulp

// gulp build (вторым параметром в массив передаются задачи которые запускаются перед выполнением данной задачи)
gulp.task('build', ['templates', 'styles', 'scripts']);

// Команда по умолчанию, то что будет происходить если написать просто gulp
gulp.task('default', ['build']);