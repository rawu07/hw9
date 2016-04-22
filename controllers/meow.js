var Meow = require('../models/meow');

module.exports = function(req, res, next) {
	//res.send('Thank you!');
	var meow = new Meow({
		name: req.body.nameid,
		words: req.body.re,
	});
	meow.save(function(err){
		if (err) throw err;
		console.log('saved!');
		Meow.find({}, function(err, users) {
			if (err) throw err;

			res.render('index', {userinfos: users});
		});

	});
};
