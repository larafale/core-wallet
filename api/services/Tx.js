var Tx = module.exports = function(tx){
	tx = tx || {}

	this.eid = Utils.string.random()
	this.amount = tx.amount || 0
	this.src = tx.src || {}
	this.dst = tx.dst || {}
	this.queries = []
	this.client = tx.client

	if(!(this.src.rx instanceof Rx) || !(this.dst.rx instanceof Rx))
		throw Err('Tx requires src.rx & dst.rx to be Rx instances')

	if(isNaN(this.amount) || this.amount === 0)
		throw Err('Tx amount need a value')

	if(this.amount < 0)
		throw Err('amount cannot be negative')
}

Tx.prototype.prepare = function(callback){
	var self = this

	// start sql transaction
	self.queries = ['BEGIN;']
	
	// prepare each rx
	async.parallel([
		function(cb){ self.src.rx.prepare({ tx: self, rx: self.src.rx, amount: -self.amount }, cb) },
		function(cb){ self.dst.rx.prepare({ tx: self, rx: self.dst.rx, amount: self.amount }, cb) }
	], function(err, queries){
		if(err) return callback(err)

		var fields = ['"srcWallet"', '"dstWallet"', '"srcUser"', '"dstUser"', '"amount"', '"client"'].join(',')
			, values = [self.src.rx.data.id, self.dst.rx.data.id, self.src.rx.data.user.id, self.dst.rx.data.user.id, self.amount, self.client.id].join(',')

		// get queries returned from 
		self.queries = self.queries.concat(queries)

		// update ledger
		self.queries.push('INSERT INTO ledger (' + fields + ') VALUES (' + values + ');')

		// end sql transaction
		self.queries.push('END;')

		callback()
	})
}

Tx.prototype.save = function(callback){
	var self = this

	Pg.query(self.queries.join(''), callback)
}

Tx.prototype.transfer = function(callback){
	var self = this

	async.series([
		function(cb){ self.prepare(cb) },
		function(cb){ self.save(cb) }
	], callback)
}