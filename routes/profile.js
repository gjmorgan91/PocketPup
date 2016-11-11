var profile = require('../profiles.json');

exports.view = function(req, res){
    res.render('profile', profile[0]);
};