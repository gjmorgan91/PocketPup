var profile = require('../profiles.json');

exports.view = function(req, res) {
    res.render('signup', profile[0]);
};

exports.getDog = function(req, res) {
	res.json(profile[0]);
}

exports.update = function(req, res) {
	profile[0].avatar = req.body.avatar;
	profile[0].breed = req.body.breed;
}

exports.updateProfile = function(req, res) {
	profile[0].ownerName = req.body.ownerName;
	profile[0].dogName = req.body.dogName;
	profile[0].age = req.body.age;
}