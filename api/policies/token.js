module.exports = function(req, res, next) {
  if(!req.param('token'))
  	return res.forbidden('You are not permitted to perform this action.')

  Client
  	.findOne({ token: req.param('token') })
  	.exec(function(err, client){
	  	if(err) return res.serverError(err)
		  if(!client) return res.forbidden('You are not permitted to perform this action.')

		  req.data = req.data || {}
			req.data.client = client

			req.body = req.body || {}
			req.body.client = client.id

		  next()
	  })
  
}
