module.exports.author = function(data, callback){
	callback(null, {
		alias: data.secure ? '' : Utils.string.random(5),
		transactionId: Utils.string.random(10),
		secure: data.secure,
    html: data.secure ? '<h1>3DS redirection</h1>' : ''
	})
}
module.exports.payment = function(){}
module.exports.capture = function(){}
module.exports.credit = function(){}
module.exports.refund = function(){}

