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

Rx.isRx = function(name){
	return _.contains(this.prototype.list, (name||'').toLowerCase())
}

Rx.prototype.prepare = function(options, callback){
	sails.models[this.name].prepare(options, callback)
}

Rx.prototype.create = function(options, callback){
	sails.models[this.name].prepare(options, callback)
}