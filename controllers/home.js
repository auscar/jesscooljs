var view = require('josi/actionresults').view;
var advService = require('../models/jesscoolService');

this.index = function() {
  return view({
    title: '请留下你的宝贵意见',
    controller: 'home',
    action: 'index',
    description: 'josiTest is a <a href="http://thatismatt.github.com/josi/">josi</a> app'
  });
};
