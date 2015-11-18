
var p = require('./lib/ezlog.js');

var print = function(){};
print = p.print;

p.h0("Start Tests");

//IIFE (Immediately-invoked function expressions)
(function() {
    p.h1("IIFE (Immediately-invoked function expressions)");
    var fn;
    var result =
        (fn = function (stuff) {
            console.log(stuff);
            return stuff;
        })();


    print("Result 1: " + result);

    result = fn("second");

    print("Result 2: " + result);


    p.h2("Private variables with getters and setters");
    var counter = (function () {
        var i = 0; //A private variable

        return {
            get: function () {
                return i;
            },
            set: function (val) {
                i = val;
            },
            increment: function () {
                return ++i;
            }
        };
    })();

    print("counter.get()", counter.get());
    print("counter.set(4)", counter.set(4));
    print("counter.increment()", counter.increment());

    p.h2("Default return values (when none declared)");
    var msg;
    result = new function () {
        msg = "new function()";
    }
    print(msg, result);

    result = function () {
        msg = " function()";
    }();
    print(msg, result);

    result = !function () {
        msg = "!function()";
    }();
    print(msg, result);


    result = ~function () {
        msg = "~function()";
    }();
    print(msg, result);

    result = +function () {
        msg = "+function()";
    }();
    print(msg, result);

    result = -function () {
        msg = "-function()";
    }();
    print(msg, result);

    p.br();
})();


//Design Patterns: Common Object Patterns
(function () {
    p.h0("DESIGN PATTERNS PART 1");
    p.h1("Common Object Patterns");
    (function () {

        p.h2("1: Arguments");

        var myFunc = function (a, b, c) {
            return a + b + c;
        }
        print("myFunc(1, 2, 3)", myFunc(1, 2, 3));
        print("myFunc(1, 2, 3, 4)", myFunc(1, 2, 3, 4)); // 4 is ignored (but available through 'arguments' object
        print("myFunc(1, 2)", myFunc(1, 2)); //c == undefined

        p.br();
        myFunc = function () {
            var sum = 0;
            for (var i = 0; i < arguments.length; ++i) {
                sum += arguments[i];
            }
            return sum;
        }

        print("myFunc(1, 2, 3)", myFunc(1, 2, 3));
        print("myFunc(1, 2, 3, 4)", myFunc(1, 2, 3, 4));
        print("myFunc(1, 2)", myFunc(1, 2));
        print("myFunc(1, 2, 3, 4)", myFunc(1, 2, "3", 4));
    })();

    (function () {
        //p.h1("DESIGN PATTERNS");
        p.h2("2: Chaining");

        var Calc = function (start) { //Best way to create Java like objects?
            var value = start | 0 //Or 0 if undefined;

            this.add = function (x) {
                value += x;
                return this;
            };
            this.multiply = function (x) {
                value *= x;
                return this;
            };
            this.equals = function (callback) {
                callback(value);
                return this;
            };
        }

        var msg = 'new Calc()' +
            '\n      .add(1)' +
            '\n      .add(2)' +
            '\n      .multiply(3)' +
            '\n      .equals(function (result) {' +
            '\n          print("equals()",result);' +//logs 9
            '\n      });' +
            '\n   RESULT';
        new Calc()
            .add(1)
            .add(2)
            .multiply(3)
            .equals(function (result) {
                print(msg, result); //logs 9
            });
    })();

    (function () {
        //p.h1("DESIGN PATTERNS");
        p.h2("3: Observable Properties");

        var Book = function (title, price) {

            var priceChanging = [],
                priceChanged = [];
            this.title = function () {
                return title
            };
            this.price = function (newPrice) {
                if (newPrice !== undefined && newPrice !== price) {
                    for (var i = 0; i < priceChanging.length; ++i) {
                        if (!priceChanging[i](this, newPrice)) {
                            return price;
                        }
                    }
                    price = newPrice;
                    for (var i = 0; i < priceChanged.length; ++i) {
                        priceChanged[i](this);
                    }
                }
                return price
            };
            this.onPriceChanging = function (callback) {
                priceChanging.push(callback);
            };
            this.onPriceChanged = function (callback) {
                priceChanged.push(callback);
            };
        };

        var book = new Book("JavaScript: The good bits", 23.99);
        print("Title", book.title());
        print("Price", book.price());

        book.onPriceChanging(function (b, price) {
            if (price > 100) {
                print(b.title(), "System error, $" + price + " is TOO HIGH!");
                return false;
            }
            return true;
        });

        book.onPriceChanged(function (b) {
            print(b.title() + " now costs: $" + b.price());
        });

        book.price(19.99);

        book.price(200);
    })();


    (function () {
        //p.h1("DESIGN PATTERNS");
        p.h2("4: Note on ECMAScript5 (it's very new apparently... as of 2012)");

        function Book() {
            var title = '';
            Object.defineProperty(this, 'title', {
                get: function () {
                    return title;
                },
                set: function (val) {
                    print("set: function(" + val + ")");
                    title = val;
                }
            });
        }

        var book = new Book();
        book.title = "New Title";
        print("Title", book.title);
    })();
})();