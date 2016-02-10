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

	//fire of on doc.ready
	sectionFlag();

});