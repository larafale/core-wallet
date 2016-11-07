module.exports = {

	string: {

	  random: function(len, lowercase){ 
	    var pos, charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', random  = '';
	    if(lowercase) charSet = charSet.toLowerCase() 
	    for (var i = 0; i < (len||6); i++){ 
	      pos = Math.floor(Math.random() * charSet.length)
	      random += charSet.substring(pos, pos+1)
	    } 
	    return random
	  },
	  
	  token: function(prefix){ 
	    return (prefix || '') + require('crypto').createHash('md5').update(module.exports.string.random(8)).digest("hex") 
	  }
		
	}

}