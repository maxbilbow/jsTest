/**
 * Created by bilbowm on 18/11/2015.
 */



//(function () {
define(['jquery'], function($) {
    /**
     * Simple print function for quick debugging.
     * It will use console.log() to output "msg: result"
     * @param msg notes - this will always print
     * @param result - optional output or extra log
     */
    var ezPrint = function (msg, result) {
        if (result != undefined) {
            console.log("   " + msg + ": " + result);
        } else {
            console.log("   " + msg);
        }
    };

    function lineBreak(header) {
        ezPrint("");
        if (header)
            console.log(header);
    }

    function hr(header, line) {
        if (header)
            lineBreak(header);
        console.log(line);
    }

    /**
     * Some useful text formatting tools.
     * @type {{print: ezPrint, h0: module.exports.h0, h1: module.exports.h1, h2: module.exports.h2, h3: module.exports.h3, h4: module.exports.h4, br: module.exports.br}}
     */
    return {
        print: ezPrint,
        h0: function (header) {
            hr(header, "><><><><><><><><><><")
        },
        h1: function (header) {
            hr(header, "====================")
        },
        h2: function (header) {
            hr(header, "--------------------")
        },
        h3: function (header) {
            hr(header, ">>>>>>>>>>>>>>>>>>>>")
        },
        h4: function (header) {
            hr(header, "********************")
        },
        br: function (header) {
            lineBreak(header)
        }
    };
});

