/**
 * Created with JetBrains WebStorm.
 * User: SNSukhanov
 * Date: 19.12.13
 * Time: 11:50
 * To change this template use File | Settings | File Templates.
 */


var BALTIC = (function(m){


    m.init = function() {
       // условия для импровизированных ролей
    }
    return m;
}(BALTIC || {}));


$(document).ready(function(){
   BALTIC.init();

    $('.main-item-nav > a').bind('click', function(event){
         BALTIC.ToolsController.showMenu(event.currentTarget);
    });

    $(document).bind('click', function(event){
        if($('.main-item-nav').find($(event.target)).length == 0){
            BALTIC.ToolsController.hideMenu();
        }
    });

    $('.pos-t-l').bind('click', function(event){
       BALTIC.ToolsController.openWindow(event.currentTarget);
    });

    $('.role').bind('click', function(event){
         var role = $(event.currentTarget).attr('role');
        BALTIC.ToolsController.switcherRole(role);
    });
});

