var uuid = require('uuid');
var sendError = require('../../util/send-error');
var status = require('../../util/status');

// Create a new user
module.exports = function (options) {
	// Shorter reference to data store
	var store = options.store;

	return function (req, res) {
		if (!req.body || !req.body.email) {
			return sendError(res, 400, 'Missing email adress');
		}

		

		// user object
		var user = {
			id: uuid.v4(),
			email: req.body.username,
			displayName: req.body.displayName,
			created: Date.now()
		};

		// Add to list
		store.users.push(user);

		// Respond
		res.status(201).json(user);
	};
};
