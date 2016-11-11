var storePage = require('../store.json');

var page = JSON.parse(storePage.indoor);

exports.view = function(req, res){
	// console.log(page.indoor);
	// res.render('store', page.indoor);
};