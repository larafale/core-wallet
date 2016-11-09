/**
 * Author.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var baseModel = require('../../shared/baseModel')

module.exports = _.merge({}, baseModel, {

  attributes: {

  	alias: {
  		type: 'string',
  		required: true
  	},

  	providerAuthorId: {
  		type: 'string',
  		required: true
  	}

  },

  beforeValidate: function(obj, next){

    Psp.author(obj, function(err, author){
      if(err) true // TODO log stuff for fraud

      obj.alias = author.alias
      obj.providerAuthorId = author.transactionId
      next()
    })

  }

})
