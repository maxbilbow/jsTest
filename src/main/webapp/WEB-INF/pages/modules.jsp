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
            margin-left: 5px;
            margin-right: 5px;
        }

        .event-box {
            background-color: lightblue;
            min-height: 150px;
            min-width: 150px;
            text-align: center;
            vertical-align: middle;
            padding: 15px;

            margin-right: 5px;;
        }
        .event-box textarea {
            height: 100px;
            width: 100%;
            vertical-align: baseline;
        }
    </style>
</head>
<body>
<h1>MODULES!</h1>


<div class="event-record">
    <h2>Events</h2>
    <ul>

    </ul>

</div>
<div class="event-box-box">
    <h2>Event Box</h2>
    <div class="event-box">
<p></p>
        <textarea></textarea>
    </div>
</div>

<div class="foo">
    <h2>FOO</h2>
    <form class="load-tweets">

        <input name="user" value="maxbilbow">
        <input type="submit" value="Go">
    </form>
    <div class="bar">
        <h2>BAR</h2>
        <ul>

        </ul>
    </div>
</div>

<div class="pub-sub">
    <h2>Pub Sub</h2>
    <p>Mouse: <b></b></p>

</div>

<script data-main="/js/main" src="/js/require.js"></script>
<script src="/js/jquery-2.1.4.js"></script>
<script type="application/javascript">

    require(['rmxjs/api']);
    require(['jquery','rmxjs/pubsub'], function($,ps){
       ps.sub('pubsub-mousemove',function(evt){

          $('.pub-sub p b').html(evt.pageX + ', ' + evt.pageY);
       });

        ps.sub('pubsub-dblclick',function(evt) {
           $('.pub-sub').toggle();
        });
    });


</script>
</body>
</html>
