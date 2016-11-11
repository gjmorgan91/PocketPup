var voters = require('../voteData.json');
var profile = require('../profiles.json');

var index = 1;

exports.view = function(req, res) {
	index = parseInt(voters[0].index);
	res.render('vote', voters[index]);
}

exports.setIndex = function(req, res) {
	if (index == 5)
		index = 1
	else
		index++
	voters[0].index = index.toString();
}

exports.giveBones = function(req, res) {
	console.log(parseInt(profile[0].bones));
	console.log(parseInt(req.body.bones));
	profile[0].bones = parseInt(profile[0].bones) + parseInt(req.body.boneValue);
	console.log(profile[0].bones);
}