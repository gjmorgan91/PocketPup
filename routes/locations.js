var locations = require('../locations.json');

exports.view = function(req, res) {
	console.log("Locations Page Render");
	res.render('locations', {locations: locations});
}
//'vote' refers to the handlebar file to run