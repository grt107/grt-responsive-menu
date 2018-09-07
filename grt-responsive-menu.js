/*!
 * GRT Responsive Menu - jQuery Plugin
 * Version: 1.0
 * Author: GRT107
 *
 * Copyright (c) 2017 GRT107
 * Released under the MIT license
*/


// Initialize on click
$('.grt-mobile-button').on('click', function(){
    $(this).toggleClass("grt-mobile-button-open");
    $("ul.grt-menu").toggleClass("open-grt-menu ");
    $("body").toggleClass("body-overflow");
});

// Add shadow on scroll
$(window).scroll(function(e){
   if ($(this).scrollTop() > 60){
       $('header').addClass('scrolled');
   } else {
       $('header').removeClass('scrolled');
   }
});