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
      type: 'string',
      alphanumeric: true
    },

  	number: {
  		type: 'string',
      numeric: true,
  		required: true
  	},
    
    expire: {
      type: 'string',
      required: true
    },
    
    expireAt: {
      type: 'date',
      required: true
    }

  },

  beforeValidate: function(obj, next){
    obj.expireAt = new Date(obj.expire)
    next()
  },

  beforeCreate: function(obj, next){
    Author.create(_.assign({}, obj, { amount: 1 }), function(err, author){
      if(err) return next(err)
      obj.number = Utils.string.cardize(obj.number, '*')
      obj.alias = author.alias
      next()
    })
  }

})
