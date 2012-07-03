define(['jQuery', 'models/Message', 'views/MessageView'], function($, Message, messageView) {
    var init = function() {
        var msg = new Message();
        msg.setDescription('Hello World!');
        $("#content").html(messageView.html(msg));
    };
    
    return {
        init: init
    };
   
});