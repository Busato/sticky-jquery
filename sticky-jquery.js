jQuery(function($) {
	function fixDiv() {
		var scrollBottom = $(window).scrollTop() + $(window).height();
		var heightToHtml = $("class/id to the place to fix html").offset();
   		var $HtmlToBeFixed = $('class/id to html that will be fixed');
   		// Height of the structure to be fixed - example 140px
   		var HtmlFixHeight = 140;
   		if (scrollBottom - HtmlFixHeight > heightToHtml.top)
   			$HtmlToBeFixed.css({
   				'position': 'absolute',
   				'top': heightToHtml.top - HtmlFixHeight
   			});
		else if ( $(window).scrollTop() < heightToHtml.top )
			$HtmlToBeFixed.css({
       			'position': 'fixed',
				'top': 'unset'
			});
	}
	$(window).scroll(fixDiv);
	fixDiv();
});