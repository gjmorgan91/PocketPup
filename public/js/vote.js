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
	$('#voteReport').hide();
}
	
function UpVote() {
	if (like == true) {
		$('#thumbsUp').fadeTo("slow", 1);
		$('#thumbsUp').fadeTo("slow", 0);
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
		$('#thumbsDown').fadeTo("slow", 1);
		$('#thumbsDown').fadeTo("slow", 0);
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
	$.get("/vote/setIndex", nextItem());
}

function nextItem(result) {
	location.reload();
}

function reportThis(event) {
		$('#voteReport').fadeTo("slow", 1);
		$('#voteReport').fadeTo("slow", 0, function() {readySubmit();});
}