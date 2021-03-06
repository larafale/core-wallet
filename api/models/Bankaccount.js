/**
 * Bankaccount.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var baseModel = require('../../shared/baseModel')

module.exports = _.merge({}, baseModel, {

  attributes: {
  	
  	iban: {
  		type: 'string',
  		required: true,
      alphanumeric: true
  	},

  	swift: {
  		type: 'string',
  		required: true,
      alphanumeric: true
  	},
  		
  	providerBankAccountId: {
  		type: 'string'
  	},
  
  	providerBankUserId: {
  		type: 'string'
  	}

  }

})

