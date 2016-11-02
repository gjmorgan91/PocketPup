'use strict';

$(document).ready(function() {
	intializePage();
});

function intializePage() {
	
	$('#like').click(changeText);
	function changeText(event) {
		console.log("in changeText");
		$(this).text("Thumbs Down");
	}

}
