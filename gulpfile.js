var gulp=require('gulp');
var uglify=require('gulp-uglify');
var concat=require('gulp-concat');
var browserify=require('gulp-browserify');
var notify=require('gulp-notify');


 var connect = require('gulp-connect');

/*建立網站*/
gulp.task('startServer',function(){

	connect.server({
		port:7421,
		livereload:true
	});
})

gulp.task('closeServer',function(){

	connect.serverClose();
})

gulp.task('scriptsAll',function () {

	
 	gulp.src('src/js/main.js')

 	/*編譯 jsx */
	.pipe(browserify({
		transform:'reactify',
		debug:true
	}))

	/*當編譯發生問題*/
	.on('error',function(err){
		this.end();

		/*使用插件發出變異錯誤的訊息*/
		gulp.src('').pipe( notify('✖ jsx編譯失敗 ✖'+err) )
	})

	/*打包成一個新的檔案*/
	.pipe(concat('main.min.js'))

	/*醜化他
	.pipe(uglify())*/

	/*建立在這個位置下*/
	.pipe(gulp.dest('src'))

	/*當執行到此處重整頁面*/
	.pipe(connect.reload())
	.pipe(notify({ message: '完成' }));	 		
});


 gulp.task('watch',function(){

 	/*某個目录及其所有子目录中的所有后缀名为js的文件*/
	var wat= gulp.watch('src/js/**/*.js',['scriptsAll'])

	wat.on('change',function(file){
		console.log(file.path)

	});
	
})

gulp.task('default',['startServer','scriptsAll','watch']);

