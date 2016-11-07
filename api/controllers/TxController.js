/**
 * TxController
 *
 * @description :: Server-side logic for managing txes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var isRx = function(name){
	return /(audiotel|author|bankaccount|card|fee|wallet)/.test((name||'').toLowerCase())
}

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

		if(!isRx(src.name) || !isRx(dst.name))
			return res.badRequest('bad rx')

    // fetch models class
		src.model = sails.models[src.name]
		dst.model = sails.models[dst.name]

		// load rxs
		async.parallel([
			function(cb){ src.model.findById(src.id, cb) },
			function(cb){ dst.model.findById(dst.id, cb) }
		], function(err, rxs){
			if(err) return res.badRequest(err)

	    TxManager.process(rxs[0], rxs[1], amount, function(err, txs){
	    	console.log(txs)
	      if(err) return res.badRequest(err)
	      res.ok(txs)
	    })

		})



  }
	
};

