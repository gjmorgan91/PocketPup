'use strict';

$(document).read(function() {
	intializePage();
})

function intializePage() {
	
	$('#like').click(changeText);
	function changeText(event) {
		console.log("in changeText");s
		$(this).text("Thumbs Down");
	}

}
