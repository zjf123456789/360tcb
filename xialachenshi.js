var express = require("express");
var http = express();
http.listen(8080,function(){
	console.log("ok")
});

//中间跨域
http.use(function(req,res,next){
	res.header('Access-Control-Allow-Origin','*');
	next()
})




//文件托管
http.all("*",function(req,res){
	res.sendFile(__dirname+req.url);
})

