var page = require('webpage').create();
page.open('http://github.com',function(status){
	console.log("status : "+status);
	if(status === "success"){
		page.render('github.png')
		phantom.exit();
	}
});