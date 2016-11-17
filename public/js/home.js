'use strict';

var amHungry = true;
var hour = null;
var date = null;
var popupShow1 = false;
var popupShow2 = false;
var inside = true;

 $(document).ready(function() {
 	$('#bowlOutdoors').hide();
 	if (amHungry == false) {
 		$('#bowlEmpty1').hide();
 		$('#bowlEmpty2').hide();
 	} else {
 		$('#bowlFull1').hide();
 		$('#bowlFull2').hide();
 	}
    $('#inside').hide();
 });

function BGChange() {

    document.getElementById("background").src = 'images/bg2.png';
    $('#outside').hide("fast");
    $('#inside').show("fast");
    $('#bowlIndoors').hide();
    $('#bowlOutdoors').show();
    if (popupShow1 == true) {
    	myFunction1();
    }
    inside = false;
    console.log("BGChange: inside is "+inside);
}

function BGChangeBack() {

    document.getElementById("background").src = 'images/bg1.png';
    $('#outside').show("fast");
    $('#inside').hide("fast");
    $('#bowlIndoors').show();
    $('#bowlOutdoors').hide();
    if (popupShow2 == true) {
    	myFunction2();
    }
    inside = true;
    console.log("BGChangeBack: inside is "+inside);
}

function updateFood() {
	if (amHungry == true) {
		$('#bowlEmpty1').hide();
		$('#bowlFull1').show();
		$('#bowlEmpty2').hide();
		$('#bowlFull2').show();
	}
	if (inside == true) {
		myFunction1();
    } else {
    	myFunction2();
    }
}

function myFunction1() {
	console.log("myFunction: inside is"+inside);
    if (inside = true) {
    	var popup = document.getElementById('myPopup1');
    	popup.classList.toggle('show');
    	console.log("inside is showing");
    }
    if (popupShow1 == false) {
    	popupShow1 = true;
    } else {
    	popupShow1 = false;
    }
}

function myFunction2() {
	console.log("myFunction: inside is"+inside);
    	var popup = document.getElementById('myPopup2');
    	popup.classList.toggle('show');
    	console.log("outside is showing");
    if (popupShow2 == false) {
    	popupShow2 = true;
    } else {
    	popupShow2 = false;
    }
}