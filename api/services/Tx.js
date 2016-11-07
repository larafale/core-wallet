var pg = require('pg')

var Tx = module.exports = function(){
	this.srcRx = {}
	this.dstRx = {}
	this.queries = ['BEGIN;']
}

Tx.prototype.prepare = function(amount, callback){
	var self = this
	
	if(!self.srcRx || !self.dstRx)
		return callback('missing rx')

	async.parallel([
		function(cb){ self.srcRx.prepare(-amount, self, cb) },
		function(cb){ self.dstRx.prepare(amount, self, cb) }
	], function(err, results){
		if(err) return callback(err)
		self.queries.push('END;')
		callback()
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

Tx.prototype.transfer = function(amount, callback){
	var self = this

	self.prepare(amount, function(err, rxs){
		self.save(callback)
	})
}