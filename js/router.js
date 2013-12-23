// Filename: router.js
/**
 * Base router of the application
 * all pages urls should be aggregated here and actions
 * taken appropriately
 */
define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'showHome',
            '*actions': 'defaultAction'
        },

        initialize: function () {
            _.bindAll(this, 'showHome', 'defaultAction');
        },

        showPage: function (MainView, HeaderView, FooterView) {
            this.removeCurrentView();
            var pageContainer = $('<div></div>').attr({id: 'page'})
            $('body').append(pageContainer);
            this.showParams.mainContent = MainView;
            this.showParams.headerContent = HeaderView;
            var page = new PageLayoutView(this.showParams);
            page.render();
            this.setView(page);
        },

        removeCurrentView: function () {
            if (!_.isEmpty(this.view)) {
                this.view.undelegateEvents();
                this.view.remove();
                this.view.$el.empty();
            }
            this.view = null;
        },

        setView: function (view) {
            this.view = view;
        },


        showHome: function (event, attributes) {
        },

        defaultAction: function () {

        }
    });

    var initialize = function () {

        var app_router = new AppRouter;
        window.router = app_router;
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});
