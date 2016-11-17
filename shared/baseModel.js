module.exports = {
	
	attributes: {
		
		client: {
			model: 'client',
			type: 'integer',
			required: true
		},

		user: {
			model: 'user',
			type: 'integer',
			required: true
		},

		amount: {
			type: 'integer',
			required: true,
			defaultsTo: 0
		}
	
	},

	// every rx must implement this function
	prepare: function(options, callback){
		return callback(Err('prepare not implemented'))
	}

}