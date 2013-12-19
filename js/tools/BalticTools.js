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
        if(menu.length != 0){
            var eventClass = $(event).parent().attr('class');
            $('.'+eventClass+' > a').addClass('hide').fadeOut(300, function(){
                menu.addClass('show');
                menu.animate({
                    'left':0
                });
            });
        }

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
        var panels = $('.pos-t-l').parents('.pnl-container').filter(':visible').find('.pnl').not($(event).parents('.pnl'));

        var widthMain = $('.pnl-container').filter(':visible').outerWidth();
        var heightMain = $('.pnl-container').filter(':visible').outerHeight();

        var panelWidth = panels.filter(':hidden').outerWidth();
        var panelHeight = panels.filter(':hidden').outerHeight();


        if(panels.filter(':hidden').length == 0){
            panels.fadeOut(100, function(){

                activePnl.find('.pml-inner').css('height', '660px');
                activePnl.find('.pnl-content').css({'height':'585px', 'width':'auto'});

                activePnl.animate({
                    'width':widthMain,
                    'height':heightMain
                }, 200);

                $(event).children().removeClass('icon-maximize').addClass('icon-minimize');
            });

//            activePnl.find('.pnl-content').append(panels.find($('.chart')[0]).addClass('delete'));
//            activePnl.find('.pnl-content').append(panels.find($('.chart')[1]).addClass('delete'));
//            activePnl.find('.pnl-content').append(panels.find($('.chart')[0]).addClass('delete'));
            panels.find($('.chart')).eq(2).addClass('delete').clone().prependTo(activePnl.find('.pnl-content'));
            panels.find($('.chart')).eq(1).addClass('delete').clone().prependTo(activePnl.find('.pnl-content'));
            panels.find($('.chart')).eq(0).addClass('delete').clone().prependTo(activePnl.find('.pnl-content'));
            activePnl.find('.delete').css({
                'display':'inline-block',
                'margin':'10px;'
            });
            var mainChart = activePnl.find('.chart').not('.delete');
            mainChart.css({
                width:'800px',
                height:'300px'
            }).find('.grapholder-inner').css({width:'800px', height:'300px'});
            charts.updateCharts(mainChart);
        }else{
            activePnl.animate({
                'width':panelWidth,
                'height':panelHeight
            }, 200, function(){

                activePnl.find('.pml-inner').css('height', 'auto');
                activePnl.find('.pnl-content').css({'height':'auto', 'width':'auto'});

                activePnl.find('.chart').css('display', 'inline-block');
                panels.fadeIn(100);
                $(event).children().addClass('icon-maximize').removeClass('icon-minimize');
            });
//           $('.delete').remove();
            var mainChart = activePnl.find('.chart').not('.delete');
            mainChart.removeAttr('style').find('.grapholder-inner').removeAttr('style');
            charts.updateCharts(mainChart);
            activePnl.find('.delete').remove();
            panels.find('.delete').removeClass('delete');
        }

    };

    view.switcherRole = function(role){
        var configRole = RoleConfig.roles[role][window.location.hash.replace('#', '')];
        var wrapCharts = $('.grapholder').parents('.pnl-container').filter(':visible').find('.grapholder');
        $(wrapCharts).find('.grapholder-inner').empty();
        $(wrapCharts).parent().prev().empty();
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