var profile = require('../profiles.json');

var profiletest = {"avatar": "images/dogs/swarleytest.png"};

exports.view = function(req, res){
	profile[0].avatar = profiletest.avatar;
    res.render('indextest', profile[0]);
};