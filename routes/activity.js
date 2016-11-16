var profile = require('../profiles.json');

exports.view = function(req, res){
    res.render('activity', profile[0]);
};

exports.setFields = function(req, res) {
	profile[0].dailyFeeding = parseInt(profile[0].dailyFeeding);
}