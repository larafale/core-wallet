/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	
  attributes: {

  	client: {
  		model: 'client',
  		required: true
  	},
    
    firstName: {
      type: 'string',
      required: true
    },
    
    lastName: {
      type: 'string',
      required: true
    },
  	
  	phone: {
  		type: 'string'
  	},
  	
  	email: {
  		type: 'string'
  	},
  	
  	nationality: {
  		type: 'string'
  	},
  	
  	addressLine: {
  		type: 'string'
  	},
  	
  	addressZipcode: {
  		type: 'string'
  	},

  	addressCity: {
  		type: 'string'
  	},

  	addressCountry: {
  		type: 'string'
  	}
  	
  }

}
