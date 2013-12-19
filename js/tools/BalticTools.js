/**
 * Created with JetBrains WebStorm.
 * User: SNSukhanov
 * Date: 19.12.13
 * Time: 11:49
 * To change this template use File | Settings | File Templates.
 */

BALTIC.ToolsController = (function(module){
    var view = {};

    view.showMenu = function(event){

        var menu = $(event).next();
        var eventClass = $(event).parent().attr('class');
        $('.'+eventClass+' > a').addClass('hide').fadeOut(300, function(){
            menu.addClass('show');
            menu.animate({
                'left':0
            });
        });
    };

    view.hideMenu = function(){
        var items = $('.main-item-nav > a');

        for(var i=0; i<items.length; i++){
            if($(items[i]).next().hasClass('show')){
                $(items[i]).next().removeClass('show');
                $(items[i]).next().animate({
                    'left':'-300px'
                }, function(){
                    items.removeClass('hide').fadeIn();
                });

                return;
            }
        }
    };

    return view;
}(BALTIC));