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
    
    $('.menu-right > a').bind('click', function(event){
    	$(event.currentTarget).fadeOut(200);
    	$(event.currentTarget).next().fadeIn(200);    	
    });


    $(document).bind('click', function(event){
        if($('.main-item-nav').find($(event.target)).length == 0){
            BALTIC.ToolsController.hideMenu();

        }
        
        if($('.menu-right').find($(event.target)).length == 0){
        	$('.menu-right > a').fadeIn(200);
    	    $('.menu-right > a').next().fadeOut(200);
        }
    });

    $('.pos-t-l').bind('click', function(event){
       BALTIC.ToolsController.openWindow(event.currentTarget);

    });

    $('.role').bind('click', function(event){
         var role = $(event.currentTarget).attr('role');
        BALTIC.ToolsController.switcherRole(role);
    });

    $('.icon-kpi').bind('click', function(){
         $('.pnl-container').hide(100, function(){
            $('.nav-icons').fadeIn(200);
         })
    });

    $('.col-icon .link-icon').bind('click', function(event){
         if($(event.currentTarget).attr('panel')){
             var group = $(event.target).parent().parent().parent().attr('href');
             var classVis = $(event.currentTarget).attr('panel');
              $('.nav-icons').fadeOut(200, function(){
                  $('.'+classVis).fadeIn(200);
                  BALTIC.ToolsController.switcherRole('role1');
              });
         }
    });
});

