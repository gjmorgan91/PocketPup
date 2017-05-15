var voters = require('../voteData.json');
var profile = require('../profiles.json');

var index = 2;
var prevIndex = 0;

exports.view = function(req, res) {
	index = parseInt(voters[0].index);
	voters[index].cashmonkey = profile[0].cashmonkey;
	res.render('vote', voters[index]);
}

exports.setIndex = function(req, res) {
	while(true){
		var newIndex = Math.floor((Math.random() * 6) + 2);
		if (newIndex != index) {
			index = newIndex;
			break;
		}
	}
		voters[0].index = index.toString();
}

exports.giveBones = function(req, res) {
	profile[0].cashmonkey = parseInt(profile[0].cashmonkey) + parseInt(req.body.boneValue);
}