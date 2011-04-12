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

this.addAdvice = function(advice){
		
		//打开数据库连接
		client.connect();
		
		//return cilent.query( 'insert into ? set content=?,intime=?',
		var query = client.query( 'insert into advice set content=?,nick=?,intime=?',
		[ advice.content,advice.nick,advice.intime ]);	
		query.on('end',function(){
			This.onInsertEnd(query);
		});
		//关闭数据库连接
		client.end();
}

this.list = function(fn){
		//打开数据库连接
		client.connect();

		//这个query方法是异步的!!!!
		var query = client.query('select * from advice order by id desc', function(err,ret,field){
			if( err ){
				console.log('读取数据库出错');
				return
			}
			fn.call(this,ret);
		});

		//开始查询
		client.end();
		return query;
}
this.onError = function(){}
this.onEnd = function(){}
this.onInsertEnd = function(){}

//this.addAdvice({
//	nick : 'auscar',
//	content : '第一条建议',
//	intime : '2011-04-12 23:12'
//});




