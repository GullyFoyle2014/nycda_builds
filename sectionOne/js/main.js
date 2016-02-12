//main styles
$(document).ready(function() {


	function sectionFlag(){
		$('#nav').onePageNav({
		   currentClass: 'current',
		   changeHash: false,
		   scrollSpeed: 750,
		   scrollThreshold: 0.2
		});
	}
	function toggleNav(){
		$('nav .topnav').slideToggle();
	}
	//window resize function
	function windowResized(){
		var width = $(window).width();
		var menu = $('nav ul');
		if( width > 768 && menu.is(':hidden')){
			menu.removeAttr('style');
		}
	}
	$(window).resize(windowResized);

	//toggles nav on click
	$('#hamburger').on('click', function(){
	 	toggleNav();
	});

	// $(window).resize(function(){
	// 	var w = $(window).width();
	// 	if(w > 420 && menu.is('.hidden')){
	// 		menu.removeAttr('style');
	// 	}
	// });

	//fire of on doc.ready
	sectionFlag();

});