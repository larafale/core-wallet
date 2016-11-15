/**
 * Wallet.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var baseModel = require('../../shared/baseModel')

var wallet = module.exports = _.merge({}, baseModel, {

  attributes: {

  },

  beforeCreate: function(obj, next){
    obj.amount = 0
    next()
  },

  prepare: function(tx, rx, amount, callback){
    var self = this

    // handle errors
  	if(rx.data.amount + amount < 0)
  		return callback(new Error('insufficient funds'))

  	if(!rx.data.user)
  		return callback(new Error('missing user'))

  	if(!rx.data.user.lastName)
  		return callback(new Error('user must have a last name'))

    // update rx amount
    rx.data.amount += amount

  	callback(null, 'UPDATE WALLET SET AMOUNT = AMOUNT + ' + amount + ' WHERE id = ' + rx.data.id + ';')
  }

})