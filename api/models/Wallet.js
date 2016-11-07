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

  prepare: function(amount, tx, callback){
  	var self = this

  	if(self.amount + amount < 0)
  		return callback(new Error('1'))

  	tx.queries.push('UPDATE WALLET WHERE id = ' + self.id + ' SET AMOUNT = AMOUNT + ' + amount + ';')
  	callback(null, tx)
  }

})


module.exports.instantiate = function(data){
	data.prepare = wallet.prepare
	data.id = data.id || Utils.string.random()
	return data
}
