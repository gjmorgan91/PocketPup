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
	var submitReady = false;

	//$.get("../data.json", updateVote());

	//get more pictures to make the valid submit change to another image
	//determine how to store the vote to the picture
	//page will need to load one of the preset profiles and images

	/*function addProjectDetails(e) {
		// Prevent following the link
		e.preventDefault();

		// Get the div ID, e.g., "project3"
		var projectID = $(this).closest('.project').attr('id');
		// get rid of 'project' from the front of the id 'project3'
		var idNumber = projectID.substr('project'.length);

		console.log("User clicked on project " + idNumber);
	}*/


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

	$('#submit').click(readySubmit);
	function readySubmit(event) {
		//load a new training topic into the page from the json
	}

	$('.report').click(reportThis);
	function reportThis(event) {
		//$.get("../data.json", updateVote());
		//swap out to another topic without giving an input
	}

	function addProjectDetails(result) {

	}

	/*
	function updateVote(result) {
		console.log(result);

	}
		var nameHTML = '<h3 id="owner">' + result[ownName] + '</h3>';
		var dogHTML = '<h3 id="pet">' + result[dogName] + '</h3>';
		var topicHTML = '<h2 id="topic">' + result[topicName] + '</h2>';
		var imageHTML = '<img id="pupPic" src="' + result[image] + ' height="300" weidth="300">';

		$('#owner').html(nameHTML);
		$('#dog').html(dogHTML);
		$('#topic').html(topicHTML);
		$('#pupPip').html(imageHTML);
	}*/

	$('#submitButton').click(submitComment);
	function submitComment() {
		dislike = true;
		like = true;
		$('.voteText').hide();
		document.getElementById("pupPic").src = "images/vote/vote_dog2.jpg";
		document.getElementById("owner").textContent = "Jacob Aguirre's";
		document.getElementById("pet").textContent = "Korra";
		document.getElementById("topic").textContent = "Puttin' on the Ritz";
}
}
