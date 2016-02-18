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


	//fire of on doc.ready
	$.stellar({
		horizontalOffset: -400,
  		verticalOffset: 587
	});//paralaxy
	sectionFlag();//jquery-nav
	$(window).resize(windowResized);

});