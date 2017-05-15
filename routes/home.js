var profile = require('../profiles.json');

exports.view = function(req, res){
    res.render('index', profile[0]);
};

exports.view2 = function(req, res){
	var profiletest = {"avatar": "images/dogs/swarleytest.png", "background": "images/bg1test.png"};
	profile[0].avatar = profiletest.avatar;
	profile[0].background = profiletest.background;
    res.render('index', profile[0]);
};

exports.showPoop = function(req, res) {
	profile[0].poop = "true";
}

exports.hidePoop = function(req, res) {
	profile[0].poop = "false";
}