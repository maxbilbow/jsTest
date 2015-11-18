/**
 * Created by bilbowm on 18/11/2015.
 */
(function() {
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
    module.exports = {
        add: function (x, y) {
            return new Calc(x).add(y | 0)
        },
        multiply: function (x, y) {
            return new Calc(x).multiply(y | 1);
        }
    };
})();