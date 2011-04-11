var view = require('josi/actionresults').view;

this.index = function() {
	console.log( this );
  return view({
    title: 'josiTest - a josi app',
    controller: 'home',
    action: 'index',
    description: 'josiTest is a <a href="http://thatismatt.github.com/josi/">josi</a> app'
  });
};
