/**
 * Created by bilbowm on 26/11/2015.
 */

//obj = Obj();
//obj.print('holo');
'use strict';
(function testNew() {
    var i = 0;
    global.print = console.log;
    function Obj() {
        this.print = function (txt) {
            console.log(txt + this.i);
        }
        this.i = ++i;
        return this;
    }

    try {
        //Not allowed in strict mode.
        var obj = Obj();
        obj.print('holo');
    } catch (e) {
        print('Obj()' + e);
    } finally {
        var obj = new Obj();
        obj.print('new Hola');
    }
})();

(function testProto() {
    function Thing(me) {
        this.me = me;
        return this;
    }

    Thing.prototype.identify = function () {
        return "I am " + this.me;
    };

    var a1 = new Thing('a1');
    var a2 = new Thing('a2');

    a2.speak = function(){
        print('hello, ' + this.identify()+'.');
    }

    print(a1);
    print(a2);
    a2.speak();
    print(a1.identify());
})();

console.log(+new Date());