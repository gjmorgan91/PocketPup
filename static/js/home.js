function BGChange() {

    document.getElementById("background").src = 'images/bg2.png';
    $('#currDog').offset({top: 300, left: 200});
    $('#outside').hide();
    $('#inside').removeClass("hidden");
}

function BGChangeBack() {

    document.getElementById("background").src = 'images/bg1.png';
    $('#currDog').offset({top: 300, left: 100});
    $('#outside').show();
    $('#inside').addClass("hidden");
}