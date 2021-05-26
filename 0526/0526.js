$(function(){
    $(window).scroll(function() {
        if($(window).scrollTop()<800){
            $('.arrow').slideUp(500);
        }else {
            $('.arrow').slideDown(500);
        }})
    });



$(function(){
    $('.arrow').on('click',function(){
        // $(this).animate({bottom:'100%'}, 1000);
        $('html,body').animate({scrollTop:'0px'}, 1000);
        setTimeout(() => {
           $('.arrow') .removeAttr('style');
        }, 1200);
    });
});

