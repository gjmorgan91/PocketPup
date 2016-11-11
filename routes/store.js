var profile = require('../profiles.json');

exports.view = function(req, res){
    res.render('store', profile[0]);
};