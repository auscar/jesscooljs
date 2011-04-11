var view = require('josi/actionresults').view;

this.index = function() {
  return {
    title: 'A josi app',
    controller: 'profile',
    action: 'index',
    description: 'This is a <a href="http://thatismatt.github.com/josi/">josi</a> app'
  };
};
