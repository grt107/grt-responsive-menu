/*!
 * GRT Responsive Menu - jQuery Plugin
 * Version: 1.0
 * Author: GRT107
 *
 * Copyright (c) 2018 GRT107
 * Released under the MIT license
*/

// Prevent href clicks on dropdown category
$('li.grt-dropdown a').on('click', function(e){
	e.preventDefault();
});

// Initialize stuff in mobile resolution
if ($(window).width() < 768) {
	$('.grt-mobile-button').on('click', function(){
		$(this).toggleClass("grt-mobile-button-open");
		$("ul.grt-menu").toggleClass("open-grt-menu ");
		$("html, body").toggleClass("body-overflow");
	});
	$('li.grt-dropdown').on('click', function(e){
		$(this).children().next().toggleClass("active-dropdown");
	});
}

// Add shadow on scroll
$(window).scroll(function(e){
   if ($(this).scrollTop() > 60){
       $('header').addClass('scrolled');
   } else {
       $('header').removeClass('scrolled');
   }
});