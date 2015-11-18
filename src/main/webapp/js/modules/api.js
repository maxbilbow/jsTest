/**
 * Created by bilbowm on 18/11/2015.
 */
define(['jquery'], function($) {
    var data = "GET&https%3A%2F%2Fapi.twitter.com%2F1.1%2Fstatuses%2Fuser_timeline.json&count%3D10%26oauth_consumer_key%3DdAQTNWDkAwwsZzkEGtUeZwRvu%26oauth_nonce%3D1ad17fcf3032e2fa9c23d2801661434f%26oauth_signature_method%3DHMAC-SHA1%26oauth_timestamp%3D1447864570%26oauth_token%3D138485011-LmnO6mxs34MAveW6rmuulPkfu3SkujFvAEgcOMsI%26oauth_version%3D1.0%26screen_name%3Dmaxbilbow"
    //{
    //    'Access-Control-Allow-Origin': 'https://api.twitter.com',
    //    Authorization: 'OAuth',
    //    oauth_consumer_key:"dAQTNWDkAwwsZzkEGtUeZwRvu",
    //    oauth_nonce:"40c498e8610f24102cd344912ff4878b",
    //    oauth_signature:"SeqAXCNBz6HQDZwaYMyC2hB0yvw%3D",
    //    //oauth_consumer_secret:'',
    //    oauth_signature_method:"HMAC-SHA1",
    //    oauth_timestamp:"1447863595",
    //    oauth_token: "138485011-LmnO6mxs34MAveW6rmuulPkfu3SkujFvAEgcOMsI",
    //    //oauth_token_secret: '',
    //    oauth_version:"1.0"
    //};
    var errors = null;

    return {
        timeline: function(user, count, callback) {
            try {
                $.getJSON(
                    'https://api.twitter.com/1.1/statuses/user_timeline.json'//?' +
                    //'screen_name=' + user +
                    //'&count=' + (count | 10)
                    ,data,  callback);
            }catch (e){
                console.warn(e);
            }
        }
    };
});