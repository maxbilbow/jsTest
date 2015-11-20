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
    <meta charset="utf-8" />
    <title>pubsub</title>
    <link href="/css/bootstrap.css" rel="stylesheet" type="text/css" />
    <style type="text/css">
        body
        {
            padding-top: 60px;
            padding-bottom: 40px;
        }
        .sidebar-nav
        {
            padding: 9px 0;
        }
    </style>
    <link href="/css/bootstrap-responsive.css" rel="stylesheet" type="text/css" />
    <link href="/css/site.css" rel="stylesheet" type="text/css" />
</head>
<body>
<div class="navbar navbar-fixed-top">
    <div class="navbar-inner">
        <div class="container">
            <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"><span
                    class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
            </a><a class="brand" href="#">Pluralsight Shopping</a>
            <div class="nav-collapse">
                <ul class="nav">
                    <li class="active"><a href="#">Home</a></li>
                </ul>
            </div>
            <ul class="nav pull-right">
                <li><a href="#">Welcome Aaron</a></li>
                <li class="divider-vertical"></li>
                <li class="mini-cart">
                    <a href="#">
                        <i class="icon-shopping-cart icon-white"></i>
                        <span>0</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
<div class="container-fluid">
    <div class="row-fluid">
        <div class="span3">
            <section class="well sidebar-nav big-cart">
                <h1>0</h1>
                <ul class="nav nav-list">
                </ul>
            </section>
        </div>
        <!--/span-->
        <div class="span9">
            <ol class="products">
                <li>
                    <section>
                        <div>
                            <i class="icon-plus" title="Add to cart"></i>
                            <img src="/img/js.png" alt="Logo" />
                        </div>
                        <h1>Common Object Patterns</h1>
                        <p>Design patterns for working with objects in JavaScript.</p>
                    </section>
                </li>
                <li>
                    <section>
                        <div>
                            <i class="icon-plus" title="Add to cart"></i>
                            <img src="/img/js.png" alt="Logo" />
                        </div>
                        <h1>Timer Patterns</h1>
                        <p>Design patterns for using timers.</p>
                    </section>
                </li>
                <li>
                    <section>
                        <div>
                            <i class="icon-plus" title="Add to cart"></i>
                            <img src="/img/js.png" alt="Logo" />
                        </div>
                        <h1>AMDs</h1>
                        <p>Understanding module patterns in JavaScript.</p>
                    </section>
                </li>
                <li>
                    <section>
                        <div>
                            <i class="icon-plus" title="Add to cart"></i>
                            <img src="/img/js.png" alt="Logo" />
                        </div>
                        <h1>Pub/ Sub</h1>
                        <p>Implementing Pub/ Sub in JavaScript.</p>
                    </section>
                </li>
            </ol>
        </div>
        <!--/span-->
    </div>
    <!--/row-->
</div>
<!--/.fluid-container-->
<script data-main="/js/app/products" src="/js/require.js"></script>
<script src="/js/jquery-2.1.4.js"></script>
<script src="/js/bootstrap.js"></script>
</body>
</html>
