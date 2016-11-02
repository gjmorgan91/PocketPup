'use strict';

$(document).ready(function() {
	intializePage();
});

function intializePage() {
	
	$('#up').click(UpVote);
	function UpVote(event) {
		console.log("in changeText");
		$(this).text("Yo Go Girl");
	}

	$('#down').click(DownVote);
	function DownVote(event) {
		console.log("in changeText");
		$(this).text("Hell Naw");
	}

}
