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

	$('#outside').onClick = function pictureChange(event) {
	(document).getElementById("background").src="images/bg2.png";
	}
}
