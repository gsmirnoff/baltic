require.config({
    paths: {
        jquery: 'libs/jquery-1.10.2.min',
        underscore: 'libs/underscore-min',
        backbone: 'libs/backbone-min',
        handlebars: 'libs/handlebars',
        text: 'libs/text'
    },
    waitSeconds: 200,
    shim: {
        underscore: {
            exports: '_'
        },
        jquery: {
            exports: 'jQuery'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    }
});

require([
    'app'
], function (App) {
    App.initialize();
});
