var projects = require('../voteData.json');

var index = 1;

exports.view = function(req, res) {
	index = parseInt(projects[0].index);
	console.log(index);
	console.log(projects);
	res.render('vote', projects[index]);
}

exports.setIndex = function(req, res) {
	if (index == 5)
		index = 1
	else
		index++
	projects[0].index = index.toString();
}