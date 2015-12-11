(function() {
    var root = this;
    var $ = require('jquery');
    var Utils = require('utils');
    var DateUtils = {};
    var MonthUtils = {};

    DateUtils.hello = function(){
        console.log('jQuery: ' + $);
        console.log('DateUtils: hello!');
        console.log('Utils.add(1+1): ' + Utils.add(1,1));
    };

    MonthUtils.hello = function(){
        console.log('Utils: ' + root.jQuery);
        console.log('Utils.add(2+2): ' + Utils.add(2,2));
    };

    root.DateUtils = DateUtils;
    root.MonthUtils = MonthUtils;


}).call(this);