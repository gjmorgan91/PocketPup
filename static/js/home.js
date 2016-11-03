'use strict';


var currDog =  {"img": "images/dogs/swarley.png",
                "name": "Swarley",
                "owner": "Greg Morgan",
                "breed": "Golden Retriever",
                "age": "2 years old"};

$(document).ready(function() {
    $('#inside').hide();
	initializePage();
});


function initializePage() {
    var currDOM = document.title;

    if (currDOM == "Pocket Pup") {
    document.getElementById("dogImg").src = currDog.img;
    }

    if (currDOM == "Profile") {
    document.getElementById("dogName").textContent = currDog.name;
    document.getElementById("owner").textContent = currDog.owner;
    document.getElementById("age").textContent = currDog.age;
    document.getElementById("breed").textContent = currDog.breed;
    document.getElementById("profDog").src = currDog.img;
    }
}

function BGChange() {

    document.getElementById("background").src = 'images/bg2.png';
    $('#currDog').offset({bottom: "140pt", left: "130pt"});
    $('#outside').hide("fast");
    $('#inside').show("fast");
}

function BGChangeBack() {

    document.getElementById("background").src = 'images/bg1.png';
    $('#currDog').offset({bottom: "130pt", left: "90pt"});
    $('#outside').show("fast");
    $('#inside').hide("fast");
}

function nextProfile() {
    if (currDog.name == "Swarley")
        setPoodle()
    else if (currDog.name == "Korra")
        setHusky()
    else if (currDog.name == "Goji")
        setTerrier()
    else if (currDog.name == "Marina")
        setSwarley()
}

function prevProfile() {
    if (currDog.name == "Swarley")
        setTerrier()
    else if (currDog.name == "Korra")
        setSwarley()
    else if (currDog.name == "Goji")
        setPoodle()
    else if (currDog.name == "Marina")
        setHusky()
}

function setPoodle() {
    currDog.img = "images/dogs/poodle.png";
    currDog.name = "Korra";
    currDog.owner = "Jacob Aguirre";
    currDog.breed = "Poodle";
    currDog.age = "3 years old";
    initializePage();
}

function setHusky() {
    currDog.img = "images/dogs/husky.png";
    currDog.name = "Goji";
    currDog.owner = "Brendon Taing";
    currDog.breed = "Husky";
    currDog.age = "1 years old";
    initializePage();
}

function setTerrier() {
    currDog.img = "images/dogs/terrier.png";
    currDog.name = "Marina";
    currDog.owner = "Tricia Ngoon";
    currDog.breed = "Jack Terrier";
    currDog.age = "5 years old";
    initializePage();
}

function setSwarley() {
    currDog.img = "images/dogs/swarley.png";
    currDog.name = "Swarley";
    currDog.owner = "Greg Morgan";
    currDog.breed = "Golden Retriever";
    currDog.age = "2 years old";
    initializePage();
}