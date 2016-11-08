
var Rx = module.exports = function(name, data){
	this.eid = Utils.string.random()
	this.name = name
	this.data = data || {}

	return this
}

// Authorized Rx
Rx.prototype.list = [
	'audiotel',
	'author',
	'bankaccount',
	'card',
	'fee',
	'wallet'
]

Rx.prototype.isRx = function(name){
	return _.contains(Rx.prototype.list, (name||'').toLowerCase())
}

Rx.prototype.prepare = function(tx, rx, amount, callback){
	var self = this
	sails.models[self.name].prepare(tx, rx, amount, callback)
}