'use strict';

$(document).ready(function() {
	intializePage();
});

function intializePage() {
	
	$('#thumbsDown').hide();
	$('#thumbsUp').hide();
	$('.voteText').hide();
	$('.voteSubmit').hide();

	var like = true;
	var dislike = true;
	var inputGiven = false;
	var submitThis = false;

	//get more pictures to make the valid submit change to another image
	//determine how to store the vote to the picture
	//page will need to load one of the preset profiles and images

	$('#up').click(UpVote);
	function UpVote(event) {
		if (like == true) {
			console.log("Vote it Up");
			$('#thumbsUp').fadeIn("fast");
			$('#thumbsUp').fadeOut('fast');
			$('#thumbsUp').hide();
			like = false;
			dislike = true;
		}
		if (submitThis == false) {
			submitThis = true;
			$('.voteSubmit').show();
		}
	}

	$('#down').click(DownVote);
	function DownVote(event) {
		if (dislike == true) {
			console.log("Vote it Down");
			$('#thumbsDown').fadeIn("fast");
			$('#thumbsDown').fadeOut("fast");
			$('#thumbsDown').hide();
			dislike = false;
			like = true;
		}
		if (submitThis == false) {
			submitThis = true;
			$('.voteSubmit').show();
		}
	}

	$('#comment').click(showComment);
	function showComment(event) {
		$('.voteText').show();
		window.scrollTo(0,5000);
		if (submitThis == false) {
			submitThis = true;
			$('.voteSubmit').show();
		}
	}

	$('.report').click(reportThis);
	function reportThis(event) {
		$.get("../data.json", updateVote());
	}

	function updateVote(result) {
		console.log(result);
		

	}

}
