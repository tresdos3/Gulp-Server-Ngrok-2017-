var gulp = require('gulp'),
	server = require('gulp-webserver')
	ngrok = require('ngrok'),
	Nport = 3000; //<== this is a number port
//task for create server
gulp.task('server', function() {
  gulp.src('app')//<== you folder name
    .pipe(server({
      livereload: true, //livereload its work
      open: true,//auto open in browser
      port: Nport
    }));
//  here connect this proyect with ngrok
    ngrok.connect(Nport,function (err, url){
    	if (err !== null) {
    		console.log('Error');
    	}
      console.log('your server is in http://localhost:'+Nport);//message server is running
      console.log('Ngrok URL:  '+ url);//message ngrok link
    });
});
