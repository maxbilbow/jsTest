/**
 * Created by bilbowm on 23/11/2015.
 */

var Obj = function() {


    var obj = {
        getText: function() {
            return "Hello!";
        }
    };

    var text = obj.getText();
    console.log(text);
    return obj;
};

new Obj();