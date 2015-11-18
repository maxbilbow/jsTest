/**
 * Created by bilbowm on 18/11/2015.
 */

var p = require('./lib/ezlog');
var print = function(){};
print = p.print;



p.h0("DESIGN PATTERNS PART 3");
p.h1("Asynchronous Module Definitions");

(function(){
    var Calc = require('./calc.js');
    var msg = 'new Calc()' +
        '\n      .add(1)' +
        '\n      .add(2)' +
        '\n      .multiply(3)' +
        '\n      .equals(function (result) {' +
        '\n          print("equals()",result);' +//logs 9
        '\n      });' +
        '\n   RESULT';
    Calc
        .add(1,2)
        .multiply(3)
        .equals(function (result) {
            print(msg, result); //logs 9
        });
})();