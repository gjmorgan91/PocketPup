'use strict';

$(document).ready(function() {
	intializePage();
});

function intializePage() {
	
	$('#up').click(UpVote);
	function UpVote(event) {
		console.log("Vote it Up");
		$(#thumbsUp).text("Yo Go Girl");
	}

	$('#down').click(DownVote);
	function DownVote(event) {
		console.log("Vote it Down");
		$(#thumbsDown).fadeIn("slow",fadeOut("fast",null));
	}

}
