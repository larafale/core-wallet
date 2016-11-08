
var Err = module.exports = function(message){
	var error = new Error(message)
  error.name = 'AppError'
  error.code = ''
  error.stack = ''
  return error
}

Err.prototype = Object.create(Error.prototype)