/**
 * Configure the require module aliases
 */
require.config({
    paths: {
        'jQuery': 'libs/jquery/jquery-1.7.2-min',
        'Underscore': 'libs/underscore/underscore-1.3.3-min',
        'Backbone': 'libs/backbone/backbone-0.9.2-min',
        'json2': 'libs/json2/json2',
        'Handlebars': 'libs/handlebars/handlebars-1.0.0.beta.6'
    },
    
    shim: {
        'jQuery': {
            exports: 'jQuery'  
        },
        
        'Underscore': {
            exports: '_'
        },
        
        'json2': {
            exports: 'JSON'
        },
        
        'Backbone': {
            deps: ['Underscore', 'jQuery'],
            exports: 'Backbone'
        },
        
        'Handlebars': {
            exports: 'Handlebars'
        }
    }
});

require([
    'app'
], function(App) {
    App.init();
});

