$(document).ready(function() {
	$(".true").attr('src','images/store/owned.png');
});

function indoorStore() {
	$.get("/store/indoors", reloadStore());
}

function outdoorStore() {
	$.get("/store/outdoors", reloadStore());
}

function buy1() {
	$.get("/store/buy1", reloadStore());
}

function buy2() {
	$.get("/store/buy2", reloadStore());
}

function buy3() {
	$.get("/store/buy3", reloadStore());
}

function buy4() {
	$.get("/store/buy4", reloadStore());
}

function buy5() {
	$.get("/store/buy5", reloadStore());
}

function buy6() {
	$.get("/store/buy6", reloadStore());
}

function reloadStore() {
	location.reload();
}