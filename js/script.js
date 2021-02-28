/* Script on ready
---------------------------------*/	
$(document).ready(function(){

    /* sticky footer function */
    StickyFooter()

    /* mobile navigation */ 

    $('.menu-trigger').click(function(){
        $(this).stop().toggleClass('open')
        $('body, html').stop().toggleClass('scroll-hidden');
        $('.navbar').stop().toggleClass('open');
    })    

    if($('#mobile-menu ul ul').length > 0){   
        $('#mobile-menu ul ul ').before('<em class="submenu-caret"></em>')
    }

    $('.submenu-caret').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('toggled');
        $(this).parent().siblings().find('ul').slideUp()
        $(this).parent().siblings().find('em').removeClass('toggled')
    })


});

/* Script on scroll
---------------------------------*/
$(window).scroll(function() {

});

/* Script on resize
---------------------------------*/
$(window).resize(function() {

    /* sticky footer function */
    StickyFooter()
});

/* Script on load
----------------------------------*/
$(window).load(function() {

    /* sticky footer function */
    StickyFooter()
});

/* Script all functions
----------------------------------*/

/* sticky footer function */
function StickyFooter(){
    var Stickyfooter = $('footer').outerHeight()
    $('#wrapper').css('margin-bottom',-Stickyfooter)
    $('#wrapper').css('padding-bottom',Stickyfooter)
}

