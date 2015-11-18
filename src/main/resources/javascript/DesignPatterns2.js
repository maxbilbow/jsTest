/**
 * Created by bilbowm on 18/11/2015.
 */

var p = require('./lib/ezlog');
var print = function(){};
print = p.print;


p.h0("DESIGN PATTERNS PART 2");
p.h1("Timer Patterns");

(function(){
    p.h2("Overview");

    (function() {
        setTimeout(function(){print("1")},1000); //1
        setTimeout(function(){print("2")},2000); //2
        setTimeout(function(){print("3")},3000); //3
    })();

    (function() {
        setTimeout(function(){print("4")},1500); //1
        setTimeout(function(){print("5")},2500); //2
        setTimeout(function(){print("6")},3500); //3
    })();

})();

(function(){
    p.h2("1. Asynchronous Module Definitions");

    var buffer = function(items, iterFn, callback) {
        var i = 0, len = items.length;

        setTimeout(function fn(){
            var result;
            for (var start = +new Date;
                 i < len && result !== false && ((+new Date) - start < 50); //+new Date returns milliseconds
                 ++i ){
                result = iterFn.call(items[i], items[i], i);
            }

            if (i < len && result !== false) {
                setTimeout(fn, 20); //callee calls this function?
            } else {
                callback(items);
            }
        },20);
    };

    (function() {
        var data = [1,2,3,4,5,6,7,8,9,10];
            var html = '';
            buffer(data,function(item) {
                html += '\n<li>' + item + '</li>';
            }, function() {
               print(html);
            });
        })();
})();

(function() {
    p.h2("Recursive Timeout Pattern");//Common for data referencing

})();