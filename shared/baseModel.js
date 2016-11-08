module.exports = {
	
	attributes: {
		
		client: {
			model: 'client',
			required: true
		},

		user: {
			model: 'user',
			required: true
		},

		amount: {
			type: 'integer',
			required: true,
			defaultsTo: 0
		}
	
	},

	// every rx must implement this function
	prepare: function(amount, tx, callback){
		return false
	}

}