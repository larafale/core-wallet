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
      , amount = parseInt(req.param('amount'), 10)

    // check if rx name is valid
		if(!Rx.isRx(src.name) || !Rx.isRx(dst.name))
			return res.badRequest('bad rx')

		// load rxs
		async.parallel([
			function(cb){ sails.models[src.name].findById(src.id).populate('user').exec(cb) },
			function(cb){ sails.models[dst.name].findById(dst.id).populate('user').exec(cb) }
		], function(err, rxs){
			if(err) return res.badRequest(err)
			
			rxs = _.flatten(rxs)
			if(rxs.length != 2) return res.badRequest('cannot find rx')

			var tx = new Tx({
	      src: { rx: new Rx(src.name, rxs[0]) },
	      dst: { rx: new Rx(dst.name, rxs[1]) },
	      amount: amount,
	      client: req.data.client
	    })

	    tx.transfer(function(err){
	      if(err) return res.badRequest(err)

	      res.ok(tx)
	    })

		})

  }
	
};

