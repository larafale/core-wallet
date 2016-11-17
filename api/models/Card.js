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
      alphanumeric: true,
      unique: true
    },

  	number: {
  		type: 'string',
      creditcard: true,
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
    Author.create(obj, function(err, author){
      if(err) return next(err)

      obj.number = Utils.string.redact(obj.number, '*')
      obj.alias = author.alias
      next()
    })
  }

})
