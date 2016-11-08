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

  prepare: function(tx, rx, amount, callback){
  	var self = this

    // handle errors
  	if(rx.data.amount + amount < 0)
  		return callback(new Err('insufficient funds'))

    // mute rx amount
    rx.data.amount += amount
    // set query
  	tx.queries.push('UPDATE WALLET WHERE id = ' + self.id + ' SET AMOUNT = AMOUNT + ' + amount + ';')

  	callback(null, rx)
  }

})