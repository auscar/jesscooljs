var adviceDao = require( './adviceDao' );

var advice = {
	content : 'this is an advice'
}
adviceDao.onError = function(){
	console.log('faild');
}
adviceDao.onEnd = function(){
	console.log('success');
}
console.log('test...');
adviceDao.addAdvice(advice);

