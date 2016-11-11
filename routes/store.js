var storePage = require('../store2.json');
var profile = require('../profiles.json');

var currStore = 0;

exports.view = function(req, res) {
	// var currStoreItems = JSON.parse({storePage:storePage});
	console.log({storePage:storePage});
	res.render('store', {storePage:storePage});
}

/*exports.view = function(req, res){
    res.render('store', profile[0]);
};*/