var ps = (function (){

    function init(ps){
        return ps;
    }

    return init({
        print:console.log,
        warn: function (msg) {
            this.print('WARNING: '+msg);
        }
    });
})();


ps.warn("Hello!");
ps.a;
//with (ps){ //NOT good!
//    a = 1;
//}

ps.warn(ps.a);

(function(info){
    ps.warn(info);
}("Hello"));
//let a = 'a constant';


for (var i=0;i<10;++i){

}
ps.print(i);
ps.warn(a);

var print = console.log;


//function THIS() {
//    var scope = 'function THIS()';
//    print(this.scope);
//}
//THIS();


function test() {
    //var scope = 'var';
    print('           var: ' + scope);
    print('  global.scope: ' + global.scope);
    print('    this.scope: ' + this.scope);
    //var scope = 'test()';
    var obj = new function THIS() {

        this.scope = "THIS()"; //Only THIS() function
        print('        THIS(): ' + this.scope);
        function inner() {
            return this.scope; //Global?
        }

        print('  THIS.inner(): ' + inner());
        return {
            innerScope: inner(),
            fn: inner,
            fn2: function inner() {
                return this.scope;
            }, scope: 'returned object'
        };
    };


    print('obj.innerScope: ' + obj.innerScope);
    print('     obj.scope: ' + obj.scope);
    print('      obj.fn(): ' + obj.fn());
    print('     obj.fn2(): ' + obj.fn2());
}

global.scope = 'global';

//'use strict';
print('before var.scope: ' + this.scope );
var scope = 'global.var';
print(' after var.scope: ' + this.scope );
this.scope = 'this';
test();
this.scope = "this.scope";
'use strict';
test.call(this); //Applies THIS as this
