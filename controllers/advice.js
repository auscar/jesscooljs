var jcService = require('../models/jesscoolService');
this.index = function() {
	
};

this.add = function() {

	//console.log(this);		
	if(!this.form.content){
		return {
			code : 1,
			msg : 'content null'
		}	
	}
	var d = new Date();
	var strD = d.getYear()+1900+'-'+d.getMonth()+'-'+d.getDay()+' '+d.getHours()+':'+d.getMinutes();

	jcService.addAdvice({
		nick : this.form.nick,
		content : this.form.content	,
		intime : strD
	});	
	return {
		code : 0,
		msg : 'sus'
	}


};

this.list = function() {
  return view({
    title: 'A josi app',
    controller: 'advice',
    action: 'list',
    description: 'This is a <a href="http://thatismatt.github.com/josi/">josi</a> app'
  });
};
