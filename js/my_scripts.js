$(document).ready(function() {

		//simple current-item
		
			var item = $('header nav ul li a');
			$(item).on('click', function(e){
				e.preventDefault();
				item.removeClass('current-item');
				$(this).addClass('current-item');
			});
		
	
		$('#icono-menu').click(function(){
			$('header nav').slideToggle();
		});

		//simple auto-size
		auto_size();
		
		function auto_size(){
			var alto=$(window).height();
			$('article#home').css('height', alto+'px');
			$(window).resize(function(){
				var alto=$(window).height();
				var winwidth = $(window).width()
				$('article#home').css('height', alto+'px');
				if (winwidth > 640){
					$('header nav').css('display', 'block');
				}else{
					$('header nav').css('display', 'none');
				}
			});
		};
	
		
		
		// anchor navigation
		$(function(){
			$('header nav ul li a').on('click',function(e){
				e.preventDefault();
				var winwidth = $(window).width()
				if (winwidth < 640){
					$('header nav').slideUp();
				}
				var ancla=$(this).attr('href');
				$('body,html').stop(true,true).animate({
					scrollTop: ($(ancla).offset().top)-50+'px'
				},1000);
			});
		});
				
			
			
});
					 






