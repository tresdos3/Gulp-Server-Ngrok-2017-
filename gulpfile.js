var gulp = require('gulp'),
	server = require('gulp-webserver')
	ngrok = require('ngrok'),
	Nport = 3000;

gulp.task('server', function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      open: true,
      port: Nport
    }));
    ngrok.connect(Nport,function (err, url){
    	if (err !== null) {
    		console.log('Error');
    	}
      console.log('your server is in http://localhost:'+Nport);
    	console.log('Ngrok URL:  '+ url);
    });
});