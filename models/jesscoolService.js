var advMgr = require('./adviceMgr');

this.addAdvice = function(advice){		
	advMgr.addAdvice(advice);
}
this.listAdvice = function(fn){		
	advMgr.listAdvice(fn);
}

//this.listAdvice(function(list){
//	console.log('service list : ',list);
//
//});

