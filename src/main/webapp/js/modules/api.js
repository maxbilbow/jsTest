

define(function() {
    $(document).ready(function(){
        var events = {
            click:0,
            dblclick:0,
            mousedown:0,
            mouseup:0,
            mouseenter:0,
            mouseleave:0,
            mousemove:0,
            mouseout:0,
            mouseover:0,
            //toggle:0,
            hover:0,
            contextmenu:0
        };

        var keyEvents = {
            keydown:0,
            keyup:0,
            keypress:0
        };

        function addListener(events,listener, event, callback) {
            listener[event](function(evt){
                if (callback)
                    callback(evt);
                events[event]++;
                $('.event-record ul li#'+event).html(event + ': ' + events[event]);
            });
        }

        $.each(events, function(k, v) {
            $('.event-record ul').append('<li id="'+k+'">'+k+': '+v+'</li>');
            addListener(events, $('.event-box'),k);
        });

        $.each(keyEvents, function(k, v) {
            $('.event-record ul').append('<li id="'+k+'">'+k+': '+v+'</li>');
            $('.event-box p').append('<span id="'+k+'">'+ k.substr(3) +  ' </span>');
            addListener(keyEvents, $('.event-box textarea'),k, function(evt){
                $('.event-box p span#'+k).html(k.substr(3) + evt.which + ' ');
                if (evt)
                    return evt.which == 8;
                else
                    console.warn(evt);
            });
        });

        //addListener($('.event-box textarea'),'keydown',function(evt){
        //    $('.event-box p').html("K" + evt.which);
        //    if (evt)
        //        return evt.which == 8;
        //    else
        //        console.warn(evt);
        //});
    });

    return "Hello!";
});