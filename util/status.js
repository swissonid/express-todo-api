module.exports = {
	ACTIVE: 'active',
	COMPLETE: 'complete',
	STARTED: 'started',
	valid: function (status) {
		return !!this[(status || '').toUpperCase()];
	}
};
