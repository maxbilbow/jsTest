<%--
  Created by IntelliJ IDEA.
  User: bilbowm
  Date: 18/11/2015
  Time: 12:56
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>TIME</title>
    <style>
        div {
            float: left;
            /*display: inline;*/
            min-width: 100px;
        }
    </style>
</head>
<body>
<h1>TIME!</h1>

<div class="foo">
    <h2>FOO</h2>
    <ul>

    </ul>
</div>

<div class="bar">
  <h2>BAR</h2>
    <ul>

    </ul>
</div>
<script src="/js/jquery-2.1.4.js"></script>
<script type="application/javascript">

    (function(){
        var i = 0;
        var intervalId = setInterval(function(){
            $.get('/assets/data.json', function(result){
                if (i < 10) {
                    $(document).ready(function(){
                        $('.foo ul').append('<li>' + result[i++] + '</li>');
                    });
                } else {
                    clearInterval(intervalId);
                    console.log("end");
                }
            });
        }, 500);
    })();

    (function getData(i){
        if (i === undefined)
            i = 10;
        setTimeout(function(){
            $.get('/assets/data.json', function(result){
                if (i > 0) {
                    $(document).ready(function () {
                        $('.bar ul').append('<li>' + result[--i] + '</li>');
                        getData(i);
                    });
                } else {
                    console.log("end");
                }
            });
        }, 500);
    })();



</script>
</body>
</html>
