var pg = require('pg')
	, Pool = new pg.Pool({
	 		host: 'localhost',
	    database: 'corewallet',
	    port: 5432
		})

module.exports.query = function(query, callback){
	Pool.connect(function (err, client, done) {
	  if (err) throw err

	  // execute a query on our database
	  client.query(query, function (err, result) {
			callback(err)
	    done()
	  })
	})
} 