var storePage = require('../store.json');
var profile = require('../profiles.json');
var currStore = 0;

exports.view = function(req, res){
	var currStoreItems = JSON.stringify(storePage.indoor);
	res.render('store', currStoreItems);
}

/*exports.view = function(req, res){
    res.render('store', profile[0]);
};*/