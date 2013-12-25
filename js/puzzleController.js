/**
 * Created with JetBrains WebStorm.
 * User: SNSukhanov
 * Date: 24.12.13
 * Time: 14:22
 * To change this template use File | Settings | File Templates.
 */

function PuzzleController(options){
        var view = this,

            config = {
              wrap:options.wrap,
              data:options.data
        },

         _render = function(){
             var mainWrapper = $('.'+config.wrap);

             for(var i=0; i<config.data.length; i++){
                 mainWrapper.append(_createElemPuzzle(config.data[i]));
             }
         },

        _createElemPuzzle = function(data){
            var wrapperElem = $('<div/>').addClass('wrap-elem').attr({
                                                                  'id':data.id,
                                                                  'name':data.name,
                                                                  'finishX':data.xFinish,
                                                                  'finishY':data.yFinish
                                                               }).css({
                                                                   'width':data.width,
                                                                   'height':data.height,
                                                                   'position':'absolute',
                                                                   'left':data.xStart,
                                                                   'top':data.yStart
                                                               });
            var img = $('<img/>').attr({
                'src':location.protocol + '//' + location.host + '/baltic/' + data.backImage
                                 }).css({
                                     'width':'100%',
                                     'height':'100%',
                                     'position':'absolute',
                                     'left':0,
                                     'top':0
                                   }).addClass('back-img');
            wrapperElem.append(img);

            var topSide = $('<div/>').addClass('top-side');
            var bottomSide = $('<div/>').addClass('bottom-side');

               wrapperElem.append(topSide);
               wrapperElem.append(bottomSide);

            if(data.title != null){
                var topHeader = $('<h2/>').text(data.title);
                topSide.append(topHeader);
            }

            if(data.subTitle != null){
                var bottomHeader = $('<h2/>').text(data.subTitle);
                bottomSide.append(bottomHeader);
            }




            var icon = $('<img/>').addClass('icon-puzzle').attr('src', location.protocol + '//' + location.host + '/baltic/' + data.icon);

            if(data.title == null && data.subTitle == null){
                topSide.append(icon);
                topSide.addClass('brand');
                bottomSide.addClass('brand');
            }else{
                bottomSide.append(icon);
                topSide.addClass('no-brand');
                bottomSide.addClass('no-brand');
            }



            wrapperElem.bind('click', function(event){
              _animationPuzzle();
            });
//            wrapperElem.bind('mouseover', function(event){
//                if($(event.target).hasClass('back-img')){
//                    $(event.currentTarget).find('.no-brand').fadeIn(100);
//
//                }
//                console.log(event.target);
//            });
//
//            wrapperElem.bind('mouseout', function(event){
////                $(event.currentTarget).find('.no-brand').fadeOut(100);
//                console.log(event);
//            });


            return wrapperElem;
        },

         _animationPuzzle = function(){
             var elems = $('.wrap-elem');
             for(var i=0; i<elems.length; i++){
                 var x = $(elems[i]).attr('finishX');
                 var y = $(elems[i]).attr('finishY');

                 $(elems[i]).animate({
                     'left':x,
                     'top':y
                 }, 1000, function(){
                     $('body').addClass('back-in');
                     $('.'+config.wrap).find('.no-brand').fadeOut(300, function(){
                         $('.'+config.wrap).fadeOut(300);
                     });
                 });
             }
         };

    view.initialize = function(){
        console.log(dataPuzzle);
        _render();
    };

    view.initialize();

}

new PuzzleController({
    wrap:'puzzle',
    data:dataPuzzle.items
});