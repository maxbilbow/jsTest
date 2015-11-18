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
    <title>Modules</title>
    <style>
        div {
            float: left;
            /*display: inline;*/
            min-width: 100px;
        }
    </style>
</head>
<body>
<h1>MODULES!</h1>

<div class="foo">
    <h2>FOO</h2>
    <form class="load-tweets">

        <input name="user" value="maxbilbow">
        <input type="submit" value="Go">
    </form>
</div>

<div class="bar">
  <h2>BAR</h2>
    <ul>

    </ul>
</div>
<script data-main="/js/main" src="/js/requirejs.js"></script>
<script src="/js/jquery-2.1.4.js"></script>
<script type="application/javascript">
//var p = require('rmxjs/ezlog');
//
//p.print("IT WORKED!");


</script>
</body>
</html>
