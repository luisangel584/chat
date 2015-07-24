$(document).ready(function(){

    var $chat = $(".chatMessages");
    var chatHeight = $chat.innerHeight();
    var chatIsAtBottom = true;


    function cargar() {
        if(chatIsAtBottom){
            $chat.stop().animate({
                scrollTop: $chat[0].scrollHeight - chatHeight
            },600);
        }
    }

    function checkBottom(){
        chatIsAtBottom = $chat[0].scrollTop + chatHeight >= $chat[0].scrollHeight;
    }

    $chat.scrollTop( $chat[0].scrollHeight ).on("scroll", checkBottom);
    setInterval( cargar, 1000 );


});
