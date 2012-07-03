define(['Backbone'], function(Backbone) {
    var Todo = Backbone.Model.extend({
        setDescription: function(description) {
            this.set({'description': description});
        }
    });
    
    return Todo;
});
