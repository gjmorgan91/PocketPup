var voters = require('../voteData.json');
var profile = require('../profiles.json');

var index = 1;

exports.view = function(req, res) {
	index = parseInt(voters[0].index);
	res.render('vote', voters[index]);
}

exports.setIndex = function(req, res) {
	if (index == 6)
		index = 1
	else
		index++
	voters[0].index = index.toString();
}

exports.giveBones = function(req, res) {
	profile[0].cashmonkey = parseInt(profile[0].cashmonkey) + parseInt(req.body.boneValue);
	console.log(profile[0].bones);
}