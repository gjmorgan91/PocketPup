var like = true;
var dislike = true;
var submitThis = false;
var submitReady = false;
var boneValue = 10;

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
		$('#thumbsUp').setActive;
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
	window.scrollTo(0,2000);
	if (submitThis == false) {
		submitThis = true;
		$('.voteSubmit').show();
	}
}

function readySubmit() {
	if (submitReady == true) {
		$('.voteSubmit').text("+10 Bones");
		$.post("/vote/giveBones", {"boneValue": boneValue});
		$.get("/vote/setIndex", nextItem());
	}
}

function nextItem(result) {
	location.reload();
}

function reportThis(event) {
		submitReady = true;
		$('#voteReport').fadeTo("slow", 1);
		$('#voteReport').fadeTo("slow", 0, function() {readySubmit();});
}