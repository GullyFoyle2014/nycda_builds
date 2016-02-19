//main styles
$(document).ready(function() {

	function sectionFlag(){
		$('#nav').onePageNav({
		   currentClass: 'current',
		   changeHash: false,
		   scrollSpeed: 750,
		   scrollThreshold: 0.4,
		   navItems: 'a:not(.submenu a)'
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
	
	//toggles nav on click
	$('#hamburger').on('click', function(){
	 	toggleNav();
	});

	// $(document).click(function(e) {
	//     var target = e.target;
	//     if (!$(target).is('#menu') && !$(target).parents().is('#menu')) {
	//         $('#menu').hide();
	//     }
	// });

	//fire of on doc.ready
	$.stellar({
		horizontalOffset: -600,
  		verticalOffset: 587
	});//paralaxy
	sectionFlag();//jquery-nav
	$(window).resize(windowResized);

});