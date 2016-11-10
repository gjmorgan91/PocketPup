var profile = require('../profiles.json');

exports.view = function(req, res){
    res.render('index', profile[0]);
};