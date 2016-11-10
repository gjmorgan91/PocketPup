var profile = require('../profiles.json');

exports.view = function(req, res){
    res.render('signup', profile[0]);
};