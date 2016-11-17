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
      required: true,
      alphadashed: true
    },
    
    lastName: {
      type: 'string',
      required: true,
      alphadashed: true
    },
  	
  	phone: {
  		type: 'string',
      unique: true
  	},
  	
  	email: {
  		type: 'string',
      email: true,
      unique: true
  	},
  	
  	nationality: {
  		type: 'string',
      enum: ['fr', 'ch', 'be'],
      defaultsTo: 'fr'
  	},
  	
  	addressLine: {
  		type: 'string'
  	},
  	
  	addressZipcode: {
  		type: 'string',
      numeric: true
  	},

  	addressCity: {
  		type: 'string'
  	},

  	addressCountry: {
  		type: 'string'
  	}
  	
  }

}
