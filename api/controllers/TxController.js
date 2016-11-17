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
			return res.negotiate(Err('bad rx'))

		// load rxs
		async.parallel({
			src: function(cb){ sails.models[src.name].findOneById(src.id).populate('user').exec(cb) },
			dst: function(cb){ sails.models[dst.name].findOneById(dst.id).populate('user').exec(cb) }
		}, function(err, rxs){
			if(err) return res.negotiate(err)
			
			if(_(rxs).values().compact().value().length != 2)
				return res.negotiate(Err('cannot find rx'))

			if(rxs.src.id === rxs.dst.id)
				return res.negotiate(Err('source and destination cannot be the same'))
			
			try{
				var tx = new Tx({
		      src: { rx: new Rx(src.name, rxs.src) },
		      dst: { rx: new Rx(dst.name, rxs.dst) },
		      amount: amount,
		      client: req.data.client
		    })
			}	catch(err){ 
				return res.negotiate(err) 
			}

	    tx.transfer(function(err){
	      if(err) return res.negotiate(err)

	      res.ok(tx)
	    })

		})

  }
	
};

