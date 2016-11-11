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
	
function UpVote() {
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

function DownVote() {
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

function showComment(event) {
	$('.voteText').show();
	window.scrollTo(0,5000);
	if (submitThis == false) {
		submitThis = true;
		$('.voteSubmit').show();
	}
}

function readySubmit() {
	console.log("Clicked");
	$.get("/vote/setIndex", nextItem());
}

function nextItem(result) {
	location.reload();
}

function reportThis(event) {
}