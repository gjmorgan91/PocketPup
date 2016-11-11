var training = require('../training.json');
var profile = require('../profiles.json');
var lessonNum = 0;

exports.view = function(req, res){
	training[lessonNum].breed = profile[0].breed;
	training[lessonNum].age = profile[0].age;	
    res.render('training', training[lessonNum]);
};

exports.setLesson = function(req, res) {
	lessonNum = parseInt(req.body.index);
}