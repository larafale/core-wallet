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
  		required: true,
      alphanumeric: true,
      unique: true
  	},

  	providerAuthorId: {
  		type: 'string',
  		required: true
  	}

  },

  beforeValidate: function(obj, next){

    Psp.author(_.assign(obj, { amount: Utils.number.toCent(obj.amount || 1) }), function(err, author){
      if(err) return next(err) // TODO log stuff for fraud

      obj.alias = author.alias
      obj.providerAuthorId = author.transactionId
      next()
    })

  }

})
