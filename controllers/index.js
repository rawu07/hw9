var Meow = require('../models/meow');

module.exports = function(req, res, next) {
	Meow.find({}, function(err, users) {
		if (err) throw err;

		res.render('index', {userinfos: users});
	});
};
