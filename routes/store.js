var storePage = require('../store2.json');
var profile = require('../profiles.json');

var currStore = 0;

exports.view = function(req, res) {
	storePage[currStore].cashmonkey = profile[0].cashmonkey;
	res.render('store', storePage[currStore]);
}

exports.indoors = function(req, res) {
	currStore = 0;
}

exports.outdoors = function(req, res) {
	currStore = 1;
}

exports.buy1 = function(req, res) {
	if (storePage[currStore].owned1 == "false"){
		storePage[currStore].owned1 = "true";
		profile[0].cashmonkey = parseInt(profile[0].cashmonkey) - parseInt(storePage[currStore].cost1);
		if (currStore == 0)
			profile[0].tv = "true";
		if (currStore == 1)
			profile[0].yellowPot = "true";
	}
}

exports.buy2 = function(req, res) {
	if (storePage[currStore].owned2 == "false"){
		storePage[currStore].owned2 = "true";
		profile[0].cashmonkey = parseInt(profile[0].cashmonkey) - parseInt(storePage[currStore].cost2);
		if (currStore == 0)
			profile[0].shelfDecos = "true";
		if (currStore == 1)
			profile[0].stump = "true";
	}
}

exports.buy3 = function(req, res) {
	if (storePage[currStore].owned3 == "false"){
		storePage[currStore].owned3 = "true";
		profile[0].cashmonkey = parseInt(profile[0].cashmonkey) - parseInt(storePage[currStore].cost3);
		if (currStore == 0)
			profile[0].painting = "true";
		if (currStore == 1)
			profile[0].rug = "true";
	}
}

exports.buy4 = function(req, res) {
	if (storePage[currStore].owned4 == "false"){
		storePage[currStore].owned4 = "true";
		profile[0].cashmonkey = parseInt(profile[0].cashmonkey) - parseInt(storePage[currStore].cost4);
		if (currStore == 0)
			profile[0].backpack = "true";
		if (currStore == 1)
			profile[0].orangepot = "true";
	}
}
exports.buy5 = function(req, res) {
	if (storePage[currStore].owned5 == "false"){
		storePage[currStore].owned5 = "true";
		profile[0].cashmonkey = parseInt(profile[0].cashmonkey) - parseInt(storePage[currStore].cost5);
		if (currStore == 0)
			profile[0].bowl_empty = "images/items/bowlBlue_empty.png";
			profile[0].bowl_full = "images/items/bowlBlue_full.png";
		if (currStore == 1)
			profile[0].flowers = "true";
	}
}
exports.buy6 = function(req, res) {
	if (storePage[currStore].owned6 == "false"){
		storePage[currStore].owned6 = "true";
		profile[0].cashmonkey = parseInt(profile[0].cashmonkey) - parseInt(storePage[currStore].cost6);
		if (currStore == 0)
			profile[0].mystery = "true";
		if (currStore == 1)
			profile[0].alcohol = "true";
	}
}