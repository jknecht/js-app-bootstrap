define(['Handlebars', 'text!templates/message.html'], function(Handlebars, messageTemplate) {
    var html = function(messageModel) {
        var template = Handlebars.compile(messageTemplate);
        return template({"message": messageModel.get('description')});
    };
    
    return {
        "html": html
    };

});
