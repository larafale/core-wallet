/**
 * Card.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var baseModel = require('../../shared/baseModel')

module.exports = _.merge({}, baseModel, {

  attributes: {

    alias: {
      type: 'string'
    },

  	number: {
  		type: 'string',
  		required: true
  	},
    
    expire: {
      type: 'string',
      required: true
    },
    
    expireAt: {
      type: 'date',
      required: true
    },
    
    providerCardId: {
  		type: 'string',
  		required: true
  	}

  }

})
