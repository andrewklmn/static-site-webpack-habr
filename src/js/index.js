import $ from "jquery";
window.$ = window.jQuery = $;
import 'slick-carousel';
import './retina.js';

import func_b from './test.js';
func_b();


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
    
    $("button#join_button").click(function(){
        window.location.href = 'https://www.google.com';
    });
    
    $("a.social").click(function(){
        window.location.href = 'https://www.google.com';
    });
    
    $("a#mobile_menu_driver").click(function(){
        $("div#mobile_menu").toggle();
        $('div#up_menu_underline').hide();
    });
    
    $("a.mobile_menu").click(function(){
        $("div#mobile_menu").hide();
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