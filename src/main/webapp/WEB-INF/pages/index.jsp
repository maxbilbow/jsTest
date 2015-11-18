<%--
  Created by IntelliJ IDEA.
  User: bilbowm
  Date: 17/11/2015
  Time: 16:05
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Hello</title>
</head>
<body>
<h1>Hello!</h1>
<div class="foo">

</div>
<ul>

</ul>
<script src="/js/jquery-2.1.4.js"></script>
<script type="application/javascript">


    jQuery('.foo')
            .addClass('bar')
            .fadeIn('slow')
            .html('<p>' +
                    'Hello World<br/>' +
                    '<a href="timers">Timer Stuff</a> |' +
                    '<a href="mods">Async Modules</a> '+
                    '</p>');

    (function() {
        var html = '';
        var buffer = function (items, iterFn, callback) {
            var i = 0, len = items.length;

            setTimeout(function fn() {
                var result;
                for (var start = +new Date;
                     i < len && result !== false && ((+new Date) - start < 5);
                     ++i) {
                    result = iterFn.call(items[i], items[i], i);
                }

                if (i < len && result !== false) {
                    html += '<li>BREAK!</li>';
                    setTimeout(fn, 20); //callee calls this function?
                } else {
                    html += '<li>END!</li>';
                    callback(items);
                }
            }, 20);
        };

        $(document).ready(function () {
            $.get('/assets/data.json', function (result) {

                buffer(result, function (item) {
                    html += '<li>' + item + '</li>';
                }, function () {
                    $('ul').append(html);
                });

            });
        });
    })();
//    var amqp = require('js/amqplib/callback_api');
//
//    amqp.connect('amqp://localhost', function(err, conn) {
//        conn.createChannel(function(err, ch) {
//            var q = 'hello';
//
//            ch.assertQueue(q, {durable: true});
//            ch.sendToQueue(q, new Buffer('Hello World!'));
//            alert(" [x] Sent 'Hello World!'");
//        });
//        setTimeout(function() { conn.close(); process.exit(0) }, 500);
//    });


</script>
</body>
</html>
