var pg = require('pg')

var Tx = module.exports = function(tx){
	tx = tx || {}

	this.eid = Utils.string.random()
	this.amount = tx.amount || 0
	this.src = tx.src || {}
	this.dst = tx.dst || {}
	this.queries = []

	if(!(this.src.rx instanceof Rx) || !(this.dst.rx instanceof Rx))
		throw Err('Tx requires src.rx & dst.rx to be Rx instances')

	if(isNaN(this.amount) || this.amount === 0)
		throw Err('Tx amount need a value')
}

Tx.prototype.prepare = function(callback){
	var self = this

	// start sql transaction
	self.queries = ['BEGIN;']

	// prepare each rx
	async.parallel([
		function(cb){ self.src.rx.prepare(self, self.src.rx, -self.amount, cb) },
		function(cb){ self.dst.rx.prepare(self, self.dst.rx, self.amount, cb) }
	], function(err, rxs){
		if(err) return callback(err)
		
		// end sql transaction
		self.queries.push('END;')

		callback(null, rxs)
	})
}

Tx.prototype.save = function(callback){
	var client = new pg.Client({
 		host: 'localhost',
    database: 'corewallet',
    port: 5432
	})

	client.connect(function (err) {
	  if (err) throw err;

	  // execute a query on our database
	  client.query('SELECT * FROM wallet', function (err, result) {
	    if (err) throw err;

	    // just print the result to the console
	    console.log(result.rows[0]); // outputs: { name: 'brianc' }

	    // disconnect the client
	    client.end(function (err) {
				callback(err)
	    });
	  });
	})
}

Tx.prototype.transfer = function(callback){
	var self = this

	self.prepare(function(err, rxs){
		if(err) return callback(err)
		self.save(callback)
	})
}