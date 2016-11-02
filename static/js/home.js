'use strict';


var currDog =  {"img": "images/dogs/swarley.png",
                "name": "Swarley",
                "owner": "Greg Morgan",
                "breed": "Golden Retriever",
                "age": "2 years"};


$(document).ready(function() {
	initializePage();
});


function initializePage() {
	$('#inside').hide();
    document.getElementById("dogImg").src = currDog.img;
}

function BGChange() {

    document.getElementById("background").src = 'images/bg2.png';
    $('#currDog').offset({top: 300, left: 200});
    $('#outside').hide("fast");
    $('#inside').show("fast");
}

function BGChangeBack() {

    document.getElementById("background").src = 'images/bg1.png';
    $('#currDog').offset({top: 300, left: 100});
    $('#outside').show("fast");
    $('#inside').hide("fast");
}

function setPoodle() {
    currDog.img = "images/dogs/poodle.png";
    currDog.name = "Korra";
    curDog.owner = "Jacob Aguirre";
    currDog.breed = "Poodle";
    currDog.age = "3 years";
}

function setHusky() {
    currDog.img = "images/dogs/husky.png";
    currDog.name = "Goji";
    curDog.owner = "Brendon Taing";
    currDog.breed = "Husky";
    currDog.age = "1 years";
}

function setTerrier() {
    currDog.img = "images/dogs/terrier.png";
    currDog.name = "Marina";
    curDog.owner = "Tricia Ngoon";
    currDog.breed = "Jack Terrier";
    currDog.age = "5 years";
}

function setSwarley() {
    currDog.img = "images/dogs/swarley.png";
    currDog.name = "Swarley";
    curDog.owner = "Greg Morgan";
    currDog.breed = "Golden Retriever";
    currDog.age = "2 years";
}