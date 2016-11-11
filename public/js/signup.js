var dog = {	"avatar": "images/dogs/swarley.png",
			"breed": "Golden Retriever"};
var index = 0;

function nextDog() {
	$.get("signup/getDog", nextDogUpdate);
}

function  nextDogUpdate(result) {
	var breed = result['breed'];


	if (index == 0) {
		dog = {	"avatar": "images/dogs/poodle.png",
				"breed": "Poodle"};
		document.getElementById("signupDog").src = 'images/dogs/poodle.png';
		document.getElementById("signupBreed").innerHTML = 'Poodle';
		index = 1;
	}
	else if (index == 1) {
		dog = {	"avatar": "images/dogs/husky.png",
				"breed": "Husky"};
		document.getElementById("signupDog").src = 'images/dogs/husky.png';
		document.getElementById("signupBreed").innerHTML = 'Husky';
		index = 2;
	}
	else if (index == 2) {
		dog = {	"avatar": "images/dogs/terrier.png",
				"breed": "Jack Terrier"};
		document.getElementById("signupDog").src = 'images/dogs/terrier.png';
		document.getElementById("signupBreed").innerHTML = 'Jack Terrier';
		index = 3;
	}
	else if (index == 3) {
		dog = {	"avatar": "images/dogs/swarley.png",
				"breed": "Golden Retriever"};
		document.getElementById("signupDog").src = 'images/dogs/swarley.png';
		document.getElementById("signupBreed").innerHTML = 'Golden Retriever';
		index = 0;
	}
	$.post("signup/update", dog);
}

function prevDog() {
	$.get("signup/getDog", prevDogUpdate);
}

function  prevDogUpdate(result) {
	var breed = result['breed'];

	if (index == 0) {
		dog = {	"avatar": "images/dogs/terrier.png",
				"breed": "Jack Terrier"};
		document.getElementById("signupDog").src = 'images/dogs/terrier.png';
		document.getElementById("signupBreed").innerHTML = 'Jack Terrier';
		index = 3;
	}
	else if (index == 1) {
		dog = {	"avatar": "images/dogs/swarley.png",
				"breed": "Golden Retriever"};
		document.getElementById("signupDog").src = 'images/dogs/swarley.png';
		document.getElementById("signupBreed").innerHTML = 'Golden Retriever';
		index = 0;
	}
	else if (index == 2) {
		dog = {	"avatar": "images/dogs/poodle.png",
				"breed": "Poodle"};
		document.getElementById("signupDog").src = 'images/dogs/poodle.png';
		document.getElementById("signupBreed").innerHTML = 'Poodle';
		index = 1;
	}
	else if (index == 3) {
		dog = {	"avatar": "images/dogs/husky.png",
				"breed": "Husky"};
		document.getElementById("signupDog").src = 'images/dogs/husky.png';
		document.getElementById("signupBreed").innerHTML = 'Husky';
		index = 2;
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
						"age": $('#signupAge').val(),
					};
		$.post({url: "signup/updateProfile", data: prof, success: logIn()});
	}
}

function logIn() {
	window.location.href = "home";
}