var projects = require('../voteData.json');

exports.view = function(req, res) {
	//var projectID = req.votePosts[0].id;
	var projectID = projects[0].id;
	console.log(projectID);
	// var project = getProjectData(projectID);
	console.log(projects);
	res.render('vote', projects[0]);
}
//'vote' refers to the handlebar file to run

function getProjectData(projectID){
	projectID = parseInt(projectID);

	var project = projects[projectID-1];
	return project; 
}