/**
 * Created by bilbowm on 18/11/2015.
 */


require(['jquery', 'modules/api', 'rmxjs/ezlog'], function($,api,p){
    // Initialize with your OAuth.io app public key

    $(document).ready(function () {
        $('.load-tweets').submit(function(e){
            e.preventDefault();

            var user = $(this).find('input').val();
            var el = $('.bar ul').empty(),lis = [];
            try {
                api.timeline(user,10, function (tweets) {
                        for (var i = 0, il = tweets.length; i < il; i++) {
                            lis.push($('<li><strong>@' + user + '</strong>: ' + tweets[i].text + '</li>'));
                        }

                    });
            } catch (e) {
                lis.push($('<li><strong>@' + user + '</strong>: '+e+'</li>'));
            }
            el.append(lis);
        });
    });
    p.print("IT WORKDED!");
});


//(function getData(i){
//    if (i === undefined)
//        i = 0;
//    setTimeout(function(){
//        if (i < tweets.length) {
//            $('.bar ul').append('<li>'+tweets[i]+'</li>');
//            getData(++i);
//        } else {
//            $('.bar ul').append('end');
//        }
//    }, 100);
//})();