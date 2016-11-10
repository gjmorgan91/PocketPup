function nextDog() {
	$.get("signup/getDog", nextDogUpdate);
}

function  nextDogUpdate(result) {
	var breed = result['breed'];

	var dog = {	"avatar": "images/dogs/swarley.png",
	"breed": "Golden Retriever"}

	if (breed == "Golden Retriever") {
		dog = {	"avatar": "images/dogs/poodle.png",
				"breed": "Poodle"};
		$.post("signup/update", dog);
	}
	else if (breed == "Poodle") {
		dog = {	"avatar": "images/dogs/husky.png",
				"breed": "Husky"};
		$.post("signup/update", dog);
	}
	else if (breed == "Husky") {
		dog = {	"avatar": "images/dogs/terrier.png",
				"breed": "Jack Terrier"};
		$.post("signup/update", dog);
	}
	else if (breed == "Jack Terrier") {
		dog = {	"avatar": "images/dogs/swarley.png",
				"breed": "Golden Retriever"};
		$.post("signup/update", dog);
	}
}

function prevDog() {
	$.get("signup/getDog", prevDogUpdate);
}

function  prevDogUpdate(result) {
	var breed = result['breed'];
	var dog = {	"avatar": "images/dogs/swarley.png",
	"breed": "Golden Retriever"}

	if (breed == "Goldren Retriever") {
		dog = {	"avatar": "images/dogs/terrier.png",
				"breed": "Jack Terrier"};
		$.post("signup/update", dog);

	}
	else if (breed == "Poodle") {
		dog = {	"avatar": "images/dogs/swarley.png",
				"breed": "Golden Retriever"};
		$.post("signup/update", dog);

	}
	else if (breed == "Husky") {
		dog = {	"avatar": "images/dogs/poodle.png",
				"breed": "Poodle"};
		$.post("signup/update", dog);

	}
	else if (breed == "Jack Terrier") {
		dog = {	"avatar": "images/dogs/husky.png",
				"breed": "Husky"};
		$.post("signup/update", dog);

	}
}

function submitProf() {
	var prof = { "ownerName": $('#signupOwner').val(),
					"dogName": $('#signupDogName').val(),
					"age": $('#signupAge').val(), }
	$.post({url: "signup/updateProfile", data: prof, success: logIn()});
}

function logIn() {
	window.location.href = "home";
}