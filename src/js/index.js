import $ from "jquery";
window.$ = window.jQuery = $;
import 'slick-carousel';


$(document).ready(function(){
   
    $("button#help").click(function(){
        window.location.href = 'https://www.google.com';
    });

    $('a.up_menu').mouseover(function(e){
        let p = $(this).position();
        let width = $(this).css('width');
        let elem = $('div#up_menu_underline');
        $(elem).css('left',p.left + 20);
        $(elem).css('top',p.top + 50);
        $(elem).css('width', width );
        $(elem).css('display','block');
    });

    $('a.up_menu').mouseout(function(e){
        $('div#up_menu_underline').css('display','none');
    });
    
    $("button#contact_us").click(function(){
        window.location.href = 'https://www.google.com';
    });
    
    $('.fade').slick({
          dots: false,
          arrows: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
	  fade:true,
          autoplay: true,
          speed: 500,
          cssEase: 'linear',
          pauseOnHover:false
     });
     
    
});