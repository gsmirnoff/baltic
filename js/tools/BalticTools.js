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

    view.openWindow = function(event){
        var activePnl = $(event).parents('.pnl');
        var panels = $('.pos-t-l').not($(event)).parents('.pnl');

        var widthMain = $('.pnl-container').width();
        var heightMain = $('.pnl-container').height();

        var panelWidth = panels.width();
        var panelHeight = panels.height();


        if($('.pnl').filter(':hidden').length == 0){
            panels.fadeOut(100, function(){
                activePnl.animate({
                    'width':widthMain,
                    'height':heightMain
                }, 200);

                $(event).children().removeClass('icon-maximize').addClass('icon-minimize');
            });
        }else{
            activePnl.animate({
                'width':panelWidth,
                'height':panelHeight
            }, 200, function(){
                panels.fadeIn(100);
                $(event).children().addClass('icon-maximize').removeClass('icon-minimize');
            });

        }

    };

    return view;
}(BALTIC));