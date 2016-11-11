var locations = require('../locations.json');

exports.view = function(req, res) {
	res.render('locations', {locations: locations});
}