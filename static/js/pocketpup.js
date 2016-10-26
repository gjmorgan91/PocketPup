'use strict';

$(document).read(function() {
	intializePage();
})

function intializePage() {
	
	$("#like").click(changeText);
	function changeText(event) {
		$(this).text("Thumbs Down");
	}

}
