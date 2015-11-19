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
        .event-box {
            background-color: lightblue;
            height: 100px;
            width: 100px;
            text-align: center;
            vertical-align: middle;
            padding:15px;
            margin-left: 5px;
            margin-right: 5px;;
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


<div class="pub-sub">
    <h2>Pub Sub</h2>
    <ul>

    </ul>

</div>
<div class="event-box-box">
    <h2>Event Box</h2>
<div class="event-box">

</div>
    </div>
<script data-main="/js/main" src="/js/requirejs.js"></script>
<script src="/js/jquery-2.1.4.js"></script>
<script type="application/javascript">

    require(['rmxjs/ezlog', 'modules/pubsub'], function(rmx, PubSub){
        rmx.print("It WOrked again!");
//        alert(PubSub);

    });


</script>
</body>
</html>
