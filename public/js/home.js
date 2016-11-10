'use strict';

 $(document).ready(function() {
     $('#inside').hide();
 });

function BGChange() {

    document.getElementById("background").src = 'images/bg2.png';
    $('#outside').hide("fast");
    $('#inside').show("fast");
}

function BGChangeBack() {

    document.getElementById("background").src = 'images/bg1.png';
    $('#outside').show("fast");
    $('#inside').hide("fast");
}