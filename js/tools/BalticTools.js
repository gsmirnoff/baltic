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
        var panels = $('.pos-t-l').not($(event)).parents('.pnl-container').filter(':visible').find('.pnl');

        var widthMain = $('.pnl-container').filter(':visible').outerWidth();
        var heightMain = $('.pnl-container').filter(':visible').outerHeight();

        var panelWidth = panels.filter(':hidden').outerWidth();
        var panelHeight = panels.filter(':hidden').outerHeight();


        if(panels.filter(':hidden').length == 0){
            panels.fadeOut(100, function(){
                activePnl.show();
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

    view.switcherRole = function(role){
        var configRole = RoleConfig.roles[role];
        var wrapCharts = $('.grapholder').parents('.pnl-container').filter(':visible').find('.grapholder');
        $(wrapCharts).find('.grapholder-inner').empty();

        for(var i=0; i<configRole.length; i++){
           $(wrapCharts).eq(i).data('configid', configRole[i]);
            $(wrapCharts).eq(i).removeClass('empty-charts-add');
        }

        for(var j = configRole.length; j<wrapCharts.length; j++){
            $(wrapCharts).eq(j).data('configid', null);
            $(wrapCharts).eq(j).addClass('empty-charts-add');
        }
        charts.updateCharts($(wrapCharts).not('.empty-charts-add'));
    };

    return view;
}(BALTIC));