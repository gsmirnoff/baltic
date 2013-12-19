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
            menu.animate({
                'left':0
            });
        });
    };

    return view;
}(BALTIC));