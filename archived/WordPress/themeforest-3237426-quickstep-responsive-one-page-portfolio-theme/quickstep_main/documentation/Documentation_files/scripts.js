jQuery.noConflict();
(function($){
	
	/* ==================
		Toggle Buttons
	================== */
	$('h2.title').click(function(){
		var $parent = $(this).parent();
		$('.section-content', $parent).slideToggle('fast');
		$('span.btn', this).toggleClass('expand');
		return false;
	});
	
	/* ==================
	Smooth Scroll to anchor links
	================== */
	$('.anchor').smoothScroll({
		offset: -100,
		afterScroll: function() {
			var id = $(this).attr('href');
			$('.section-content',id).slideDown();
			$('span.btn', id).removeClass('expand');
		}
	});
	
	/* ==================
		  Colorbox
	================== */
	$("a[rel='gallery'], a[rel='colorbox'], a.enlarge").colorbox({
		maxWidth: '85%',
		maxHeight: '85%'	
	});
	
	/* ==================
	Display section list after scrolling down
	================== */
	var showingSectionList = false;
	if($("#sections-header")){
		$(window).scroll(function(){
			if($(window).scrollTop()>=80){
				if(!showingSectionList){
					showingSectionList=true;
					$("#sections-header").fadeIn();
				}
			}else{
				if(showingSectionList){
					showingSectionList=false;
					$("#sections-header").fadeOut();
				}
			}
		});
	}
	
	// Remove border on last title of list
	$('.section:last').addClass('last-section');
	
})(jQuery);