var like = true;
var dislike = true;
var inputGiven = false;
var submitThis = false;
var submitReady = false;

$(document).ready(function() {
	intializePage();
});

function intializePage() {
	
	$('#thumbsDown').hide();
	$('#thumbsUp').hide();
	$('.voteText').hide();
	$('.voteSubmit').hide();
}

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
		submitReady = true;
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
		submitReady = true;
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

	$('#submitButton').click(readySubmit);
	function readySubmit() {
		$.get("/vote/setIndex", nextItem);
		//load a new training topic into the page from the json
	}

	function nextItem() {
		loaction.reload();
	}

	$('.report').click(reportThis);
	function reportThis(event) {
		//swap out to another topic without giving an input
	}

	function addProjectDetails(result) {

	}

// 	$('#submitButton').click(submitComment);
// 	function submitComment() {
// 		dislike = true;
// 		like = true;
// 		$('.voteText').hide();
// 		document.getElementById("pupPic").src = "images/vote/vote_dog2.jpg";
// 		document.getElementById("owner").textContent = "Jacob Aguirre's";
// 		document.getElementById("pet").textContent = "Korra";
// 		document.getElementById("topic").textContent = "Puttin' on the Ritz";
// }
