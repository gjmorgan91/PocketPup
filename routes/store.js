var storePage = require('../store.json');
var profile = require('../profiles.json');

exports.view = function(req, res){
	console.log(storePage.indoor);
	// res.render('store', page.indoor);
}

/*exports.view = function(req, res){
    res.render('store', profile[0]);
};*/