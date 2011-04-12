var adviceDao = require( './adviceDao' );

this.addAdvice = function(advice){
	adviceDao.addAdvice(advice);
}
this.listAdvice = function(fn){
	adviceDao.list(fn);
}

//var advice = {
//	content : 'this is an advice'
//}
//adviceDao.onError = function(){
//	console.log('faild');
//}
//adviceDao.onEnd = function(){
//	console.log('success');
//}
//adviceDao.onInsertEnd = function(query){
//	console.log(query);
//}
//adviceDao.addAdvice(advice);

