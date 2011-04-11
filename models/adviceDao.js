var Client = require('mysql').Client;
var client = new Client();

//client.host = '116.255.186.74';
client.host = '127.0.0.1';
client.user = 'jesscool';
client.password = 'auscar147896325';
client.database = 'jesscoolDB';

var This = this;
client.on('error',function(e){
	This.onError(e);	
});
client.on('end',function(e){
	console.log('client end');
	This.onEnd(e);
});
client.addListener('row',function(e){
	console.log('row');
	This.onEnd(e);
});

this.addAdvice = function(advice){
		
		//打开数据库连接
		client.connect();
		
		//return cilent.query( 'insert into ? set content=?,intime=?',
		client.query( 'insert into advice set content=?',
		[ advice.content ]);	

		//关闭数据库连接
		client.end();
}

this.allAdvice = function(){
		//打开数据库连接
		client.connect();
		var _ret = [];
		client.query('select * from User', function(err,ret,field){
			if( err ){
				console.log('读取数据库出错');
				client.end();
				return
			}
			_ret.push(ret);
			console.log(ret);
		});
		//关闭数据库连接
		client.end();
		return _ret;
}
this.onError = function(){}
this.onEnd = function(){}




