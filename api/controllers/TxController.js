/**
 * TxController
 *
 * @description :: Server-side logic for managing txes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	_config: {
		actions: false,
		shortcuts: false,
		rest: false
	},

	process: function(req, res){
    var src = { name: req.param('src'), id: req.param('srcId') }
      , dst = { name: req.param('dst'), id: req.param('dstId') }
      , amount = req.param('amount')

    // check if rx name is valid
		if(!Rx.isRx(src.name) || !Rx.isRx(dst.name))
			return res.badRequest('bad rx')

		// load rxs
		async.parallel([
			function(cb){ sails.models[src.name].findById(src.id, cb) },
			function(cb){ sails.models[dst.name].findById(dst.id, cb) }
		], function(err, rxs){
			if(err) return res.badRequest(err)

			var tx = new Tx({
	      src: { rx: new Rx(rxs[0].name, rxs[0].toObject()) },
	      dst: { rx: new Rx(rxs[0].name, rxs[1].toObject()) },
	      amount: amount
	    })

	    tx.prepare(function(err, rxs){
	    	console.log(rxs)
	      if(err) return res.badRequest(err)
	      res.ok(rxs)
	    })

		})

  }
	
};

