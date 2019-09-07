$(document).ready(function(){
	'use strict';
	
	let coverHeight = $('.cover').height();

	$(window).on('scroll', function(){
		if($(window).scrollTop() > coverHeight) {
			$('.navbar').removeClass('bg-transparent')
						.addClass('bg-pre-transparent');
		}else{
			$('.navbar').addClass('bg-transparent')
						.removeClass('bg-pre-transparente');
		}
		
	});


});