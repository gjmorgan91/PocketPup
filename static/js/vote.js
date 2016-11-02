'use strict';

$(document).ready(function() {
	intializePage();
});

function intializePage() {
	
	$('#thumbsDown').hide();
	$('#thumbsUp').hide();

	$('#up').click(UpVote);
	function UpVote(event) {
		console.log("Vote it Up");
		$('#thumbsUp').fadeIn("fast");
		$('#thumbsUp').fadeOut('fast');
		$('#thumbsUp').hide();
	}

	$('#down').click(DownVote);
	function DownVote(event) {
		console.log("Vote it Down");
		$('#thumbsDown').fadeIn("fast");
		$('#thumbsDown').fadeOut("fast");
		$('#thumbsDown').hide();
	}

}
