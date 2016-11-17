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
	    return (prefix || '') + require('crypto').createHash('md5').update(module.exports.string.random(8)).digest('hex') 
	  },

	  redact: function(value, mask){
	  	mask = mask || '0'
	  	return value.substr(0, 6) + _.repeat(mask, 6) + value.substr(12, 4)
	  }
		
	},

	number: {
		
	  round: function(number, decimals){ 
	    decimals = !decimals && decimals !== 0 ? 2 : 0
	    return Math.round((number || 0) * Math.pow(10, decimals)) / Math.pow(10, decimals) 
	  },

	  toCent: function(value){
	    return module.exports.number.round(value * 100)
	  }

	}

}