/**
 * Created by bilbowm on 19/11/2015.
 */


define(['jquery'], function($) {
    $(document).ready(function(){
        var events = {
            click:0,
            hover:0,
            mouseover:0,
            keydown:0
        };

        function addListener(listener, event, callback) {
            listener[event](function(evt){
                if (callback && callback(evt) == true)
                    events[event]--;
                else
                    events[event]++;
                $('.pub-sub ul li#'+event).html(event + ': ' + events[event]);
            });
        }

        $.each(events, function(k, v) {
            $('.pub-sub ul').append('<li id="'+k+'">'+k+': '+v+'</li>');
            addListener($('.event-box'),k);
        });
        addListener($(this).find('input'),'keydown',function(evt){
            $('.event-box').html("K" + evt.which);
            if (evt)
                return evt.which == 8;
            else
                console.warn(evt);
        });
    });
   return "Hello!";
});