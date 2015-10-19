$(function(){
   var nav = $('.meuMenu');
   
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
          nav.addClass("fixar");
        }else{
          nav.removeClass("fixar");
        }
        
    });


});





//var offset = $('#meuMenu').offset().top;
//var $meuMenu = $('#meuMenu');
//$(document).on('scroll', function () {
//    if (offset <= $(window).scrollTop()) {
//        $meuMenu.addClass('fixar');
//    } else {
//        $meuMenu.removeClass('fixar');
//    }
//});