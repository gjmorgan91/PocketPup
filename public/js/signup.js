var dog = {	"avatar": "images/dogs/swarley.png",
			"breed": "Golden Retriever"}

function nextDog() {
	$.get("signup/getDog", nextDogUpdate);
	$('#signupDog').hide();
	$('#signupBreed').hide();
}

function  nextDogUpdate(result) {
	var breed = result['breed'];


	if (breed == "Golden Retriever") {
		dog = {	"avatar": "images/dogs/poodle.png",
				"breed": "Poodle"};
	}
	else if (breed == "Poodle") {
		dog = {	"avatar": "images/dogs/husky.png",
				"breed": "Husky"};
	}
	else if (breed == "Husky") {
		dog = {	"avatar": "images/dogs/terrier.png",
				"breed": "Jack Terrier"};
	}
	else if (breed == "Jack Terrier") {
		dog = {	"avatar": "images/dogs/swarley.png",
				"breed": "Golden Retriever"};
	}

	$.post({url: "signup/update", data: dog, success: showDog()});
}

function showDog() {
	//setTimeout(function() {location.reload();}, 0);
}

function prevDog() {
	$.get("signup/getDog", prevDogUpdate);
}

function  prevDogUpdate(result) {
	var breed = result['breed'];

	if (breed == "Goldren Retriever") {
		dog = {	"avatar": "images/dogs/terrier.png",
				"breed": "Jack Terrier"};
	}
	else if (breed == "Poodle") {
		dog = {	"avatar": "images/dogs/swarley.png",
				"breed": "Golden Retriever"};
	}
	else if (breed == "Husky") {
		dog = {	"avatar": "images/dogs/poodle.png",
				"breed": "Poodle"};
	}
	else if (breed == "Jack Terrier") {
		dog = {	"avatar": "images/dogs/husky.png",
				"breed": "Husky"};
	}

	$.post("signup/update", dog);
}

function submitProf() {
	if (($('#signupOwner').val() == '') || ($('#signupDogName').val() == '') || ($('#signupAge').val() == '')) {
		$('body').append("<h5 id='notFilled' font-size='2em'>Please fill out all forms</h5>");
		setTimeout(function(){$('#notFilled').remove();}, 2000);
	}

	else {
		var prof = { "ownerName": $('#signupOwner').val(),
						"dogName": $('#signupDogName').val(),
						"age": $('#signupAge').val()}
		$.post({url: "signup/updateProfile", data: prof, success: logIn()});
	}
}

function logIn() {
	window.location.href = "home";
}