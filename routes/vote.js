var projects = require('../voteData.json');

var index = 0;

exports.view = function(req, res) {
	//var projectID = req.votePosts[0].id;
	var projectID = projects[index].id;
	console.log(projectID);
	// var project = getProjectData(projectID);
	console.log(projects);
	res.render('vote', projects[index]);
}
//'vote' refers to the handlebar file to run

function getProjectData(projectID){
	projectID = parseInt(projectID);

	var project = projects[projectID-1];
	return project; 
}

exports.setIndex = function(req, res) {
	index++;
	console.log("reload");
}