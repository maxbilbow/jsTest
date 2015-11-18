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
    var waiting = true;
    (function() {
        setTimeout(function(){print("1")},100); //1
        setTimeout(function(){print("2")},200); //2
        setTimeout(function(){print("3")},300); //3
    })();

    (function() {
        setTimeout(function(){print("4")},150); //1
        setTimeout(function(){print("5")},250); //2
        setTimeout(function(){print("6")},350); //3
        setTimeout(function(){
            waiting = false;
            print("Waiting",waiting);
        },400);
    })();

    //while (waiting !== false) {
    //
    //}
    //
    print("Waiting",waiting);

})();

setTimeout(function() {
    (function () {
        p.h2("1. Asynchronous Module Definitions");

        var buffer = function (items, iterFn, callback) {
            var i = 0, len = items.length;

            setTimeout(function fn() {
                var result;
                for (var start = +new Date;
                     i < len && result !== false && ((+new Date) - start < 50); //+new Date returns milliseconds
                     ++i) {
                    result = iterFn.call(items[i], items[i], i);
                }

                if (i < len && result !== false) {
                    setTimeout(fn, 20); //callee calls this function?
                } else {
                    callback(items);
                }
            }, 20);
        };

        (function () {
            var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            var html = '';
            buffer(data, function (item) {
                html += '\n<li>' + item + '</li>';
            }, function () {
                print(html);
            });
        })();
    })();

    (function () {
        p.h2("Recursive Timeout Pattern");//Common for data referencing

        var i = 0;

        var intervalId = setInterval(function() { //setInterval unpredictable across browsers.
            if (i < 10) {
                print("setInterval", ++i);
            } else {
                clearInterval(intervalId);
                print("setInterval","end");
            }
        }, 100);


        (function getData(i){
            if (i === undefined)
                i = 0;
            setTimeout(function(){
                    if (i < 10) {
                        print("setTimeout", ++i);
                        getData(i);
                    } else {
                       print("setTimeout","end");
                    }
            }, 100);
        })();
    })();
},450);