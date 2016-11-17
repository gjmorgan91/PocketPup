'use strict';

var amHungry = true;
var hour = null;
var date = null;

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
}

function BGChangeBack() {

    document.getElementById("background").src = 'images/bg1.png';
    $('#outside').show("fast");
    $('#inside').hide("fast");
    $('#bowlIndoors').show();
    $('#bowlOutdoors').hide();
}

function updateFood() {
	if (amHungry == true) {
		$('#bowlEmpty1').hide();
		$('#bowlFull1').show();
		$('#bowlEmpty2').hide();
		$('#bowlFull2').show();
	}
}

function myFunction() {
    var popup = document.getElementById('myPopup');
    popup.classList.toggle('show');
}